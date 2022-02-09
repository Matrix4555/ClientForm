Vue.component('client-form', {
    data() {
        return {
            sections: sections,
            form: fieldsForForm
        }
    },
    validations: {
        form: validationsForForm
    },
    methods: {
        submit() {
            this.$v.form.$touch();
            const error = this.$v.$invalid;
            if(!error)
                alert('Клиент успешно создан');
        }
    },
    template: clientFormTemplate
});

Vue.component('form-header', {
    template: headerTemplate
});

Vue.component('form-section', {
    props: {
        section: { type: Object, required: true },
        fields: { type: Object, required: true },
        validations: { type: Object, required: true }
    },
    template: sectionTemplate
});

Vue.component('form-input', {
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
        }
    },
    template: inputTemplate
});

Vue.component('form-selector', {
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
    },
    template: selectorTemplate
});

Vue.component('selector-option-default', {
    template: defaultOptionTemplate
});

Vue.component('selector-option', {
    props: {
        option: { type: Object, required: true }
    },
    template: optionTemplate
});

Vue.component('form-checkbox', {
    template: checkboxTemplate
});

Vue.component('error', {
    props: {
        validation: { type: Object, required: true },
        validator: { type: String, required: true },
        extraClass: { type: String, default: '' }
    },
    template: errorTemplate
});

Vue.component('form-footer', {
    template: footerTemplate
});
