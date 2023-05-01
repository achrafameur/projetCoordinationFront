import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import Footer from "./Footer";
import Header from "./Header";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const result = await axios.get("http://localhost:3000/posts");
      setPosts(result.data);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <Header />

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Titre</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Image</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {posts.map((post) => (
              <TableRow key={post.id}>
                <TableCell>{post.title}</TableCell>
                <TableCell>{post.description}</TableCell>
                <TableCell>
                  <img src={post.image} alt={post.title} width="100" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Footer />
    </>
  );
}
