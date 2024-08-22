import React from "react";
import {
  Box,
  Input,
  Button,
  Textarea,
  Stack,
  Select,
  useToast,
} from "@chakra-ui/react";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import { addTodo } from "../api/todo";
import Auth from "./Auth";
const AddTodo = () => {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [status, setStatus] = React.useState("pending");
  const [isLoading, setIsLoading] = React.useState(false);
  const base_url = process.env.NEXT_PUBLIC_BASE_URL;

  const toast = useToast();

  const { isLoggedIn, user } = useAuth();

  const CallAPI = async (todo) => {
    try {
      if (!base_url) {
        console.error(
          "BASE_URL is not defined. Check your environment variables."
        );
      }
      const response = await axios.post(`${base_url}/todos`, todo);
      await addTodo(response.data);
    } catch (error) {
      console.error("Error creating todo:", error);
      toast({
        title: "Failed to create todo",
        description: "There was an error creating the todo. Please try again.",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "bottom-right",
      });
    }
  };

  const handleTodoCreate = async () => {
    if (!isLoggedIn) {
      toast({
        title: "You must be logged in to create a todo",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "bottom-right",
      });
      return;
    }

    setIsLoading(true);

    const todo = {
      title,
      description,
      status,
      userId: user.uid,
    };

    await CallAPI(todo);

    setIsLoading(false);

    setTitle("");
    setDescription("");
    setStatus("pending");

    toast({
      title: "Todo created successfully",
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "bottom-right",
    });
  };

  return (
    <>
      <Box w="40%" margin={"0 auto"} display="block" mt={5}>
        <Auth />
        <Stack direction="column">
          <Input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <Textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <Select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option
              value={"pending"}
              style={{ color: "yellow", fontWeight: "bold" }}
            >
              Pending ⌛
            </option>
            <option
              value={"completed"}
              style={{ color: "green", fontWeight: "bold" }}
            >
              Completed ✅
            </option>
          </Select>

          <Button
            onClick={() => handleTodoCreate()}
            disabled={title.length < 1 || description.length < 1 || isLoading}
            variantColor="teal"
            variant="solid"
          >
            Add
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default AddTodo;
