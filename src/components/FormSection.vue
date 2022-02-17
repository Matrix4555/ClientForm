<template>
    <div class="form-section">
        <div class="form-section-title">
            <h2>{{section.header}}</h2>
        </div>
        <div class="form-section-data" :id="section.name">

            <Input
                v-for="input in section.inputs"
                :key="input.name"
                :input="input"
                v-model="fields[input.name]"
                :validation="validations[input.name]"
            />

            <Selector
                v-for="selector in section.selectors"
                :key="selector.name"
                :selector="selector"
                v-model="fields[selector.name]"
                :validation="validations[selector.name]"
            />

            <Checkbox v-if="section.name === 'clientdata'"/>
        </div>
    </div>
</template>

<script>
import '../styles/section.sass';

import Input from './Input.vue';
import Selector from './Selector.vue';
import Checkbox from './Checkbox.vue';

export default {
    name: 'FormSection',
    components: { Input, Selector, Checkbox },
    props: {
        section: { type: Object, required: true },
        fields: { type: Object, required: true },
        validations: { type: Object, required: true }
    },
};
</script>
