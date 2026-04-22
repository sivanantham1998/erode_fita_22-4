function Props_demo(transferData) {

    console.log(transferData.data)
    return (
        <>
            <h1>
                Props,
                {transferData.data.Uname}
                {transferData.data.location}
                {transferData.data.qualification}
            </h1>
        </>
    )
}

export default Props_demo