<template>
    <div>
        <Error :validation="validation" :validator="'required'">обязательно</Error>
        <Error :validation="validation" :validator="'containsOnlyLetters'">только буквы</Error>
        <Error :validation="validation" :validator="'numeric'">только цифры</Error>
        <template v-if="input.type === 'tel' && validation.required">
            <Error :validation="validation" :validator="'startsWithPlusAndContainsOnlyDigits'">только цифры</Error>
            <Error v-if="validation.startsWithPlusAndContainsOnlyDigits" :validation="validation" :validator="'minLength'">не меньше 11 цифр</Error>
            <Error v-if="validation.startsWithPlusAndContainsOnlyDigits" :validation="validation" :validator="'maxLength'">не больше 11 цифр</Error>
        </template>
    </div>
</template>

<script>
import Error from './Error.vue';

export default {
    name: 'ErrorsForFields',
    components: { Error },
    props: {
        validation: { type: Object, required: true },
        input: { type: Object, required: true }
    }
};
</script>
