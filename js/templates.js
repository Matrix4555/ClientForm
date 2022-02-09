const clientFormTemplate = `
    <form @submit.prevent="submit" action="" method="post" class="client-form">
        <form-header></form-header>
        <form-section
            v-for="section in sections"
            :key="section.name"
            :section="section"
            :fields="form"
            :validations="$v.form"
        >
        </form-section>
        <form-footer></form-footer>
    </form>
`;

const headerTemplate = `
    <div class="form-header">
        <h1>Создание Клиента</h1>
    </div>
`;

// not for component property
const innerInputTemplate = `
    <form-input
        v-for="input in section.inputs"
        :key="input.name"
        :input="input"
        v-model="fields[input.name]"
        :validation="validations[input.name]"
    ></form-input>
`;

// not for component property
const innerSelectorTemplate = `
    <form-selector
        v-for="selector in section.selectors"
        :key="selector.name"
        :selector="selector"
        v-model="fields[selector.name]"
        :validation="validations[selector.name]"
    ></form-selector>
`;

const sectionTemplate = `
    <div class="form-section">
        <div class="form-section-title">
            <h2>{{section.header}}</h2>
        </div>
        <div class="form-section-data" :id="section.name">

            <template v-if="section.name !== 'document'">
                ${innerInputTemplate}
                ${innerSelectorTemplate}
            </template>
            <template v-else>
                ${innerSelectorTemplate /* in the document section selectors must be on top */}
                ${innerInputTemplate}
            </template>
            
            <form-checkbox v-if="section.name === 'clientdata'"></form-checkbox>
        </div>
    </div>
`;

// not for component property
const innerErrorsTemplate = `
    <error :validation="validation" :validator="'required'">обязательно</error>
    <error :validation="validation" :validator="'containsOnlyLetters'">только буквы</error>
    <error :validation="validation" :validator="'numeric'">только цифры</error>
    <template v-if="input.type === 'tel' && validation.required">
        <error :validation="validation" :validator="'startsWithPlusAndContainsOnlyDigits'">только цифры</error>
        <error v-if="validation.startsWithPlusAndContainsOnlyDigits" :validation="validation" :validator="'minLength'">не меньше 11 цифр</error>
        <error v-if="validation.startsWithPlusAndContainsOnlyDigits" :validation="validation" :validator="'maxLength'">не больше 11 цифр</error>
    </template>
`;

const inputTemplate = `
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
        ${innerErrorsTemplate}
    </div>
`;

const selectorTemplate = `
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
                <selector-option-default>></selector-option-default>
                <selector-option
                    v-for="option in selector.options"
                    :key="option.value"
                    :option="option"
                ></selector-option>
            </select>
            <error :validation="validation" :validator="'required'" extraClass="error-selector">обязательно</error>
        </div>
    </div>
`;

const defaultOptionTemplate = `
    <option value="" selected disabled hidden>выберите</option>
`;

const optionTemplate = `
    <option :value="option.value">{{option.text}}</option>
`;

const checkboxTemplate = `
    <div class="form-section-data-checkbox">
        <input type="checkbox" name="sms" id="sms">
        <label for="sms">не отправлять СМС</label>
    </div>
`;

const errorTemplate = `
    <transition name="slide-fade">
        <div
            v-if="validator in validation && validation.$error && !validation[validator]""
            class="error"
            :class="extraClass"
        >
            <slot></slot>
        </div>
    </transition>
`;

const footerTemplate = `
    <div class="form-footer">
        <button type="submit">Создать клиента</button>
    </div>
`;
