<template>
    <div id="displayElement">
        <p>
            this is  a test vue component
            {{message}}
        </p>
    </div>
</template>

<script>
export default {
    name: 'Test',
    data(){
        return {
            message: 'ohhhhhhhhhhhhhhhhhhhhhh'
        }
    }
}
</script>

<style scoped>
    #displayElement {
        font-size: 40px;
        color: red;
        border-radius: 12px;
        border: 1px red;
    }
</style>