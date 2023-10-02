import { useContext, useEffect } from "react";

import { TodoContext } from "../store/providers/TodoContext.provider";
import { AddItem } from "./includes/AddItem";
import { ListTodos } from "./includes/ListTodos";

import BackgroundImage from "../ui-elements/images/BackgroundImage";
import { Container, Typography, Box } from "@mui/material";

const TodoPage = () => {
  const [state, todoAction] = useContext(TodoContext);
  useEffect(() => {
    todoAction.requestData();
  }, []);

  useEffect(() => {
    todoAction.requestData();
  }, [state.refreshStatus]);

  return (
    <BackgroundImage>
      <Container
        maxWidth="sm"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.85)",
        }}
      >
        <Box boxShadow={5} p={4} borderRadius={4}>
          <Typography
            variant="h2"
            align="center"
            fontWeight={900}
            color="#666"
            marginBottom={5}
          >
            - To Do List -
          </Typography>
          <AddItem />
          <ListTodos />
        </Box>
      </Container>
    </BackgroundImage>
  );
};

export { TodoPage };
