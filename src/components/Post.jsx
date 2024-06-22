import React from 'react'

export default function Post({ post }) {
  return (
    <>
      <h3>{post.title}</h3>
      <div>{post.content}</div>
    </>
  )
}
