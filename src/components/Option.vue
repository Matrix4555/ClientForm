<template>
    <option :value="option.value">{{option.text}}</option>
</template>

<script>
export default {
    name: 'SelectorOption',
    props: {
        option: { type: Object, required: true }
    }
};
</script>
