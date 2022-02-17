<template>
    <div class="form-section-data-selector" :class="selector.className">
        <label :for="selector.name">
            {{selector.label}}
        </label>
        <div>
            <select
                v-model="vModelHandler"
                :class="{ 'hasError': validation.$error }"
                :name="selector.name"
                :id="selector.name"
                :multiple="selector.isMultiple"
                :size="selector.isMultiple ? selector.options.length : 1"
            >
                <OptionDefault/>
                <Option
                    v-for="option in selector.options"
                    :key="option.value"
                    :option="option"
                />
            </select>
            <Error :validation="validation" :validator="'required'" extraClass="error-selector">обязательно</Error>
        </div>
    </div>
</template>

<script>

import Option from './Option.vue';
import OptionDefault from './OptionDefault.vue';
import Error from './Error.vue';

export default {
    name: 'FormSelector',
    components: { Option, OptionDefault, Error },
    props: {
        selector: { type: Object, required: true },
        value: { type: [Array, String], required: true },
        validation: { type: Object, required: true }
    },
    computed: {
        vModelHandler: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit('input', value);
                if(this.validation.$invalid)
                    this.validation.$reset();
            }
        }
    }
};
</script>
