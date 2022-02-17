<template>
    <div class="form-section-data-input">
        <input
            v-model="vModelHandler"
            :class="{ 'hasError': validation.$error }"
            :type="input.type"
            :name="input.name"
            :id="input.name"
            :placeholder="input.placeholder"
            @focus="
                input.type === 'tel' ? togglePlusSeven() : '';
                ['birthday', 'issuedate'].some(i => input.name === i) ? toggleDateType($event) : '';
            "
            @blur="
                input.type === 'tel' ? togglePlusSeven() : '';
                ['birthday', 'issuedate'].some(i => input.name === i) ? toggleDateType($event) : '';
            "
        />
        <ErrorsForFields :validation="validation" :input="input"/>
    </div>
</template>

<script>
import ErrorsForFields from './ErrorsForFields.vue';

export default {
    name: 'FormInput',
    components: { ErrorsForFields },
    props: {
        input: { type: Object, required: true },
        value: { type: String, required: true },
        validation: { type: Object, required: true }
    },
    computed: {
        vModelHandler: {
            get() {
                return this.value;
            },
            set(value) {
                if(this.input.name === 'phone' && !value.startsWith('+7')) {
                    // this $emit is needed to call the getter to save '+7' in phone field
                    this.$emit('input', '##');
                    this.$emit('input', '+7');
                } else {
                    this.$emit('input', value);
                }
                if(this.validation.$invalid)
                    this.validation.$reset();
            }
        }
    },
    methods: {
        toggleDateType(e) {
            if(['birthday', 'issuedate'].some(i => this.input.name === i)) {
                const date = e.target;
                date.type = date.type === 'text' ? 'date' : !date.value ? 'text' : 'date';
            }
        },
        togglePlusSeven() {
            if(this.value === '')
                this.$emit('input', '+7');
            else if(this.value === '+7')
                this.$emit('input', '');
            this.validation.$reset();
        }
    }
};
</script>
