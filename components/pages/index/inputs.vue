<template>
  <div>
    <h2>Input Components ( {{ input.length - 1 }} )</h2>
    <s-table background="#B0C4DE" striped>
      <template slot="head">
        <tr>
          <s-table-th>Component</s-table-th>
          <s-table-th>Issues</s-table-th>
          <s-table-th>Ideas</s-table-th>
          <s-table-th align="center">Working</s-table-th>
        </tr>
      </template>
      <s-table-tr>
        <s-table-td>
          <nuxt-link v-bind:to="{ name: 'inputs' }">
            <s-tooltip text="View all inputs">
              <b>General</b>
            </s-tooltip>
          </nuxt-link>
        </s-table-td>
        <s-table-td>
          <s-list>
            <s-list-item v-for="(gen, indextr) in issues" v-bind:key="indextr">
              {{ gen }}
            </s-list-item>
          </s-list>
        </s-table-td>
        <s-table-td>
          <s-list>
            <s-list-item v-for="(gen, indextr) in ideas" v-bind:key="indextr">
              {{ gen }}
            </s-list-item>
          </s-list>
        </s-table-td>
        <s-table-td> </s-table-td>
      </s-table-tr>
      <s-table-tr v-for="(comp, indextr) in comps" v-bind:key="indextr">
        <s-table-td>
          <nuxt-link v-bind:to="{ name: 'inputs-' + comp.name }" class="case">
            {{ comp.name }}
          </nuxt-link>
        </s-table-td>
        <s-table-td>
          <s-list>
            <s-list-item v-for="(issue, i) in comp.issues" v-bind:key="i">
              {{ issue }}
            </s-list-item>
          </s-list>
        </s-table-td>
        <s-table-td>
          <s-list>
            <s-list-item v-for="(idea, i) in comp.ideas" v-bind:key="i">
              {{ idea }}
            </s-list-item>
          </s-list>
        </s-table-td>
        <s-table-td align="center">
          <s-icon
            v-bind:icon="comp.checked ? 'check' : 'times'"
            v-bind:color="comp.checked ? 'green' : 'red'"
          />
        </s-table-td>
      </s-table-tr>
    </s-table>
  </div>
</template>

<script>
export default {
  computed: {
    input() {
      return this.$router.options.routes.filter(a => a.name.includes('input'))
    }
  },
  data() {
    return {
      comps: [
        {
          name: 'checkbox',
          ideas: [],
          issues: []
        },
        {
          name: 'datepicker',
          ideas: [],
          issues: []
        },
        {
          name: 'input',
          ideas: [],
          issues: []
        },
        {
          name: 'input-color',
          ideas: [],
          issues: []
        },
        {
          name: 'input-number',
          ideas: [],
          issues: []
        },
        {
          name: 'radio',
          ideas: [],
          issues: []
        },
        {
          name: 'select',
          ideas: [],
          issues: [
            'select is not updating the text in the input - visuals -- cannot replicate'
          ]
        },
        {
          name: 'slider',
          ideas: [],
          issues: []
        },
        {
          name: 'switch',
          ideas: [],
          issues: [
            'getBoundingClientRect - textarea - cannot replicate',
            'document not defined'
          ]
        },
        {
          name: 'textarea',
          ideas: [],
          issues: [
            'getBoundingClientRect - slider - cannot replicate',
            'need to import trix directly into component'
          ]
        }
      ],
      ideas: [
        'Add clear value capability - double click - add as option(store) - on squadset not comp.'
      ],
      issues: [
        'All inputs should work without a var',
        'des-cr - transition uses document vars and needs to be re-worked'
      ]
    }
  }
}
</script>
