<script setup>
</script>
<template>
    <div class="filter-section">
      <div v-for="button in buttons" :key="button" class="sort-button" ref="buttonRefs[button]">
        <button @click="toggleDropdown(button)" :class="{ open: isDropdownOpen[button] }">
          {{ button }} <span v-if="button !== 'Sorter efter' && selectedOptions[button] && selectedOptions[button].length > 0">({{ selectedOptions[button].length }} valgt)</span>
          <span class="arrow" :class="{ up: isDropdownOpen[button] }"></span>
        </button>
        <div v-show="isDropdownOpen[button]" class="dropdown">
          <div v-for="option in options[button]" :key="option" @click="selectOption(button, option)">
            <label v-if="button !== 'Sorter efter'">
              <input type="checkbox" v-model="selectedOptions[button]" :value="option">
              {{ option }}
            </label>
            <div v-else @click="selectOption(button, option)">
              {{ option }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
data() {
  return {
    buttons: ['Sorter efter', 'Type', 'Region', 'By'],
    options: {
      'Sorter efter': ['I dag', 'Denne uge', 'Denne måned', 'Alle'],
      Type: ['Tømmer', 'Murer', 'VVS'],
      Region: ['Region A', 'Region B', 'Region C'],
      By: ['By X', 'By Y', 'By Z']
    },
    isDropdownOpen: {
      'Sorter efter': false,
      Type: false,
      Region: false,
      By: false
    },
    selectedOptions: {}
  };
},
    methods: {
      toggleDropdown(button) {
        if (!this.isDropdownOpen[button]) {
          // Close other dropdowns
          Object.keys(this.isDropdownOpen).forEach((key) => {
            if (key !== button) {
              this.isDropdownOpen[key] = false;
            }
          });
  
          // Attach click event listener to close dropdown on outside click
          document.addEventListener('click', this.closeDropdownOnClickOutside);
        } else {
          // Remove click event listener if all dropdowns are closed
          const isOpen = Object.values(this.isDropdownOpen).some((value) => value);
          if (!isOpen) {
            document.removeEventListener('click', this.closeDropdownOnClickOutside);
          }
        }
  
        this.isDropdownOpen[button] = !this.isDropdownOpen[button];
      },
      selectOption(button, option) {
        if (!this.selectedOptions[button]) {
          this.selectedOptions[button] = [];
        }
  
        if (button !== 'Sorter efter') {
          if (this.selectedOptions[button].includes(option)) {
            this.selectedOptions[button] = this.selectedOptions[button].filter((item) => item !== option);
          } else {
            this.selectedOptions[button].push(option);
          }
        } else {
          this.selectedOptions[button] = [option];
        }
      },
      closeDropdown(button) {
        if (this.selectedOptions[button] && this.selectedOptions[button].length === 0) {
          this.selectedOptions[button] = null;
        }
        this.isDropdownOpen[button] = false;
      },
      closeDropdownOnClickOutside(event) {
  const activeButtons = Object.keys(this.isDropdownOpen).filter((key) => this.isDropdownOpen[key]);

  const isClickInside = activeButtons.some((button) => {
    const ref = this.$refs.buttonRefs[button];
    return ref && ref.contains(event.target);
  });

  if (!isClickInside) {
    activeButtons.forEach((button) => {
      if (this.isDropdownOpen.hasOwnProperty(button)) {
        this.closeDropdown(button);
      }
    });
    document.removeEventListener('click', this.closeDropdownOnClickOutside);
  }
}

    },

    beforeUnmounted() {
  document.removeEventListener('click', this.closeDropdownOnClickOutside);
}
  };
  </script>
  
  <style scoped>
    *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
  .filter-section {
    display: flex;
    justify-content: center;
  }
  .sort-button {
    position: relative;
    display: inline-block;
  }
  button {
    padding: 10px 20px;
    cursor: pointer;
    border: none;
    background-color: #f2f2f2;
    border-radius: 10px;
    display: flex;
    align-items: center;
    position: relative;
    z-index: 1;
  }
  button.open {
    background-color: #e0e0e0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  .arrow {
    margin-left: 5px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 5px 5px 0 5px;
    border-color: #333 transparent transparent transparent;
    transition: transform 0.2s;
  }
  .arrow.up {
    transform: rotate(180deg);
  }
  .dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #f9f9f9;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 5px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    z-index: 2;
  }
  
  .dropdown div {
    padding: 5px;
    cursor: pointer;
  }
  
  .dropdown div label {
    display: flex;
    align-items: center;
  }
  
  .dropdown div input[type="checkbox"] {
    margin-right: 5px;
  }
  
  .dropdown div:hover {
    background-color: #e0e0e0;
  }
  </style>
  