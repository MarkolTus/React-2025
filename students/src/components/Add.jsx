function Add({sid, semail, sname, handleSubmit, handleSid, handleSname, handleEmail}) {

    return (
        <>
        <h1>Add a student</h1>
        <form onSubmit={handleSubmit}>
            <label>Student Id</label>
            <input type="text" name="sid" value={sid} onChange={handleSid} />
            <label>Name</label>
            <input type="text" name="sname" value={sname} onChange={handleSname} />
            <label>Email</label>
            <input type="text" name="email" value={semail} onChange={handleEmail} />
            <input type="submit" value="save"/>
        </form>
        </>
  )
}

export default Add