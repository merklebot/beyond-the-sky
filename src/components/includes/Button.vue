<template>
    <component 
      :is="href ? 'a' : 'button'"
      v-bind:href="href"
      :class="classes"
    >
      <slot/>
    </component>
</template>

<script>
export default {
  props: {
    size: {
        type: String,
        default: 'big',
        validator: function (value) {
          return ['small', 'medium', 'big'].indexOf(value) !== -1;
        }
    },

    label: {
        type: String,
        default: 'none',
        validator: function (value) {
          return ['none', 'stripe'].indexOf(value) !== -1;
        }
    },

    color: {
        type: String,
        default: 'blue',
        validator: function (value) {
          return ['blue', 'orange', 'green'].indexOf(value) !== -1;
        }
    },

    href: {
      type: String,
      default: null
    },

    round: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    classes() {
      return {
        [`button`]: true,
        [`button--${this.size}`]: true,
        [`label-${this.label}`]: true,
        [`${this.color}`]: true,
        [`button--round`]: this.round,
      };
    },
  }
}
</script>

<style scoped>
  .button {
    border: 0;
    cursor: pointer;

    text-transform: uppercase;
    letter-spacing: 1px;
    font-family: var(--font-highlight);
    font-weight: 900;
    font-size: calc(var(--font-size) * 1.2);
    padding: 1rem 2rem;
    min-width: 300px;
    border-radius: 2rem;

    transition: all 0.2s linear;
  }

  .button, a.button {
    background-color: var(--color-lilac);
    color: var(--color-cyan);
  }

  a.button {
    text-decoration: none;
  }

  .button:hover, a.button:hover {
    background-color: var(--color-orange);
    color: var(--color-cyan);
  }

  .button--medium {
    font-size: var(--font-size);
    padding: 0.8rem 1rem;
    min-width: auto;
  }

  .text, .label {
    display: inline-block;
    vertical-align: middle;
  }

   .label {
    max-width: 76px;
    margin: 0 var(--space);
  }

  .label:first-child {
    margin-left: 0;
  }

  .label:last-child {
    margin-right: 0;
  }

  .button.orange {
    background-color: var(--color-orange);
  }
  .button.orange:hover {
    background-color: var(--color-red);
  }

  .button.green {
    background-color: var(--color-green);
  }
  .button.green:hover {
    background-color: var(--color-red);
  }

  .button--round {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: auto;
    padding: 0;
  }

  .button--round.button--small {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 2.5rem;
  }

  .button--round.button--medium {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 3.5rem;
  }

  .button--round.button--big {
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 4.5rem;
  }
</style>