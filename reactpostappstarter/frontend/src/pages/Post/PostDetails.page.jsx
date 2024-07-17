import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button, Container, Text } from "@mantine/core";
import axios from "axios";
import DOMAIN from "../../services/endpoint";

function PostDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const response = await axios.get(`${DOMAIN}/api/posts/${id}`);
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching post details:", error);
      }
    };
    fetchPostDetails();
  }, [id]);

  const handleEditClick = () => {
    navigate(`/posts/${id}/edit`);
  };

  if (!post) return null;

  return (
    <Container>
      <Text variant="h2">{post.title}</Text>
      <Text variant="subtitle1">Category: {post.category}</Text>
      <Text>By: {post.author}</Text>
      <img src={post.image} alt={post.title} style={{ maxWidth: "100%" }} />
      <Text>{post.content}</Text>
      {post.isCurrentUserPost && (
        <Button onClick={handleEditClick} style={{ marginTop: "1rem" }}>
          Edit
        </Button>
      )}
      <Button style={{ marginTop: "1rem" }}>
        <Link to="/posts">Back to Posts</Link>
      </Button>
    </Container>
  );
}

export const postDetailsLoader = async ({ params }) => {
  const response = await axios.get(`${DOMAIN}/api/posts/${params.id}`);
  return response.data;
};

export default PostDetailsPage;
