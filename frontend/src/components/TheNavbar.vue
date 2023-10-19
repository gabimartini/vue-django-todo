<template>
    <nav>
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/tasks">All tasks</router-link></li>
            <li><router-link to="/add">Add new task</router-link></li>
        </ul>
    </nav>
</template>

<style scoped>
ul {
    border-bottom: 2px solid coral;
    list-style: none;
    display: flex;
    justify-content: space-between;
}
li {
    padding: 10px;
}
li :hover {
    background-color: coral;
    color: white
}
a {
    text-decoration: none;
    padding: 10px;
    color: black
}
</style>