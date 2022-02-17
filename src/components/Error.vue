<template >
    <transition name="slide-fade">
        <div
            v-if="validator in validation && validation.$error && !validation[validator]"
            class="error"
            :class="extraClass"
        >
            <slot></slot>
        </div>
    </transition>
</template>

<script>
import '../styles/error.sass';

export default {
    name: 'FormError',
    props: {
        validation: { type: Object, required: true },
        validator: { type: String, required: true },
        extraClass: { type: String, default: '' }
    }
};
</script>
