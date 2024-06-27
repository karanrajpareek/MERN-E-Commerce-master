/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import Layout from "../core/Layout"
import { isAuthenticated } from "../auth"
import { Link } from "react-router-dom"
import { createCategory } from "./apiadmin"

const AddCategory = () => {
  const [name, setName] = useState("")
  const [error, setError] = useState("")
  const [success, setSucess] = useState("")

  //destructure user and info from localstorage

  const { user, token } = isAuthenticated()

  const handleChange = (e) => {
    setError("")
    setName(e.target.value)
  }

  const clickSubmit = (e) => {
    e.preventDefault()
    setError("")
    setSucess(false)

    //make request to api to create category
    createCategory(user._id, token, { name }).then((data) => {
      if (data.error) {
        setError(true)
      } else {
        setError("")
        setSucess(true)
        console.log("Successfully created category")
      }
    })
  }

  const newCategoryForm = () => (
    <form onSubmit={clickSubmit}>
      <div className="form-group">
        <label className="text-muted">Name</label>
        <br />
        <input
          type="text"
          className="form-control"
          onChange={handleChange}
          value={name}
          autoFocus
          required
        />
      </div>
      <button className="btn btn-outline-primary">Create Category</button>
    </form>
  )

  const showSuccess = () => {
    if (success) {
      return <h3 className="text-success">{name} is created</h3>
    }
  }
  const showError = () => {
    if (error) {
      return <h3 className="text-danger">{name} is already created</h3>
    }
  }
  const goBack = () => (
    <div className="mt-5" style={{ fontWeight: "bold", fontSize: "large" }}>
      <Link to="/admin/dashboard" className="text-warning">
        Back To Dashboard
      </Link>
    </div>
  )

  return (
    <Layout
      title="Add a new Category"
      description={`Hello ${user.name}, ready to add a new category`}
    >
      <div className="row">
        <div className="col-md-8 offset-md-2">
          {showError()}
          {showSuccess()}
          {newCategoryForm()}
          {goBack()}
        </div>
      </div>
    </Layout>
  )
}

export default AddCategory
