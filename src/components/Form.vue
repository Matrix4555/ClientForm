<template>
    <form @submit.prevent="submit" action="" method="post" class="client-form">
        <FormHeader/>
        <FormSection
            v-for="section in sections"
            :key="section.name"
            :section="section"
            :fields="form"
            :validations="$v.form"
        />
        <FormFooter/>
    </form>
</template>

<script>
import FormHeader from './FormHeader.vue';
import FormSection from './FormSection.vue';
import FormFooter from './FormFooter.vue';

import { sections } from '../data/data';
import { fieldsForForm } from '../data/data';
import { validationsForForm } from '../data/validations';

export default {
    name: 'ClientForm',
    components: { FormHeader, FormSection, FormFooter },
    data() {
        return {
            sections,
            form: fieldsForForm
        };
    },
    validations() {
        return {
            form: validationsForForm
        };
    },
    methods: {
        submit() {
            this.$v.form.$touch();
            const error = this.$v.$invalid;
            if(!error)
                alert('Клиент успешно создан');
        }
    }
};
</script>
