import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Table } from "flowbite-react";
import { Link } from "react-router-dom";

function DashPosts() {
  const { currentUser } = useSelector((state) => state.user);
  const [userPosts, setUserPosts] = useState({});
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(
          `/api/posts/getposts?userId=${currentUser._id}`
        );
        const data = await res.json();
        if (res.ok) {
          setUserPosts(data.posts);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    if (currentUser.isAdmin) {
      fetchPosts();
    }
  }, [currentUser._id]);
  return (
    <div className="table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500">
      {currentUser.isAdmin && userPosts.length > 0 ? (
        <>
          <Table>
            <Table.Head>
              <Table.HeadCell>Date update</Table.HeadCell>
              <Table.HeadCell>Post image</Table.HeadCell>
              <Table.HeadCell>Post title</Table.HeadCell>
              <Table.HeadCell>Category</Table.HeadCell>
              <Table.HeadCell>Delete</Table.HeadCell>
              <Table.HeadCell>
                <span>Edit</span>
              </Table.HeadCell>
            </Table.Head>
            {userPosts.map((posts) => {
              <Table.Body className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell>
                    {new Date(posts.updatedAt).toLocaleDateString()}
                  </Table.Cell>
                  <Table.Cell>
                    <Link to={`/posts/${posts.slug}`}>
                      <img
                        src={posts.image}
                        alt={posts.title}
                        className="w-20 h-10 object-cover bg-gray-500"
                      />
                    </Link>
                  </Table.Cell>
                  <Table.Cell>
                    <Link
                      className="font-medium text-gray-900 dark:text-white"
                      to={`/posts/${posts.slug}`}
                    >
                      {posts.title}
                    </Link>
                  </Table.Cell>
                  <Table.Cell>{posts.category}</Table.Cell>
                  <Table.Cell>
                    <span className="font-medium text-red-500 hover:underline cursor-pointer">
                      Delete
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <Link
                      className="text-teal-500"
                      to={`/update-post/${posts._id}`}
                    >
                      <span>Edit</span>
                    </Link>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>;
            })}
          </Table>
        </>
      ) : (
        <p>You have no posts yet!</p>
      )}
    </div>
  );
}

export default DashPosts;