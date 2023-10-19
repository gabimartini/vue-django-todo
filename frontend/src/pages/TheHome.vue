<template>
    <div>
        <router-link to="/tasks">see all tasks</router-link>
        <router-link to="/add">add new task</router-link>
    </div>
</template>


<style scoped>

div {
    display: flex;
    justify-content: center;
}

a {
    margin: 40px 40px 0 0;
    border: 2px solid coral;
    background-color: coral;
    color: white;
    width: 100px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    padding: 10px;
}
</style>