<template>
  <div>
    <h2>Layout Components ( {{ layout.length }} )</h2>
    <s-table background="#DCDCDC" striped>
      <template slot="head">
        <tr>
          <s-table-th>Component</s-table-th>
          <s-table-th>Issues</s-table-th>
          <s-table-th>Ideas</s-table-th>
          <s-table-th align="center">Working</s-table-th>
        </tr>
      </template>
      <s-table-tr>
        <s-table-td><b>General</b></s-table-td>
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
          <nuxt-link v-bind:to="{ name: 'layout-' + comp.name }" class="case">
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
    layout() {
      return this.$router.options.routes.filter(a => a.name.includes('layout'))
    }
  },
  data() {
    return {
      comps: [
        {
          name: 'col',
          ideas: [],
          issues: [],
          checked: true
        },
        {
          name: 'row',
          ideas: [],
          issues: [],
          checked: true
        }
      ],
      ideas: [],
      issues: []
    }
  }
}
</script>
