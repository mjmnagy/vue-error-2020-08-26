<template>
  <div>
    <h2>General Components ( {{ compsCount }} )</h2>
    <s-table background="#B0E0E6" striped>
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
        <s-table-td></s-table-td>
      </s-table-tr>
      <s-table-tr v-for="(comp, indextr) in comps" v-bind:key="indextr">
        <s-table-td>
          <nuxt-link v-bind:to="{ name: 'comps-' + comp.name }" class="case">
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
    compsCount() {
      return this.$router.options.routes.filter(a => a.name.includes('comps'))
        .length
    }
  },
  data() {
    return {
      comps: [
        {
          name: 'alert',
          ideas: [],
          issues: ['the close button icon is not well placed'],
          checked: true
        },
        {
          name: 'avatar',
          ideas: [],
          issues: [' avatar should be bigger by default - too small'],
          checked: true
        },
        {
          name: 'breadcrumb',
          ideas: [],
          issues: [' add to property to crumb comp. - copy from navbar'],
          checked: true
        },
        {
          name: 'button',
          ideas: [],
          issues: [],
          checked: true
        },
        {
          name: 'card',
          ideas: [],
          issues: [],
          checked: true
        },
        {
          name: 'chip',
          ideas: [],
          issues: [],
          checked: true
        },
        {
          name: 'collapse',
          ideas: [],
          issues: [],
          checked: true
        },
        {
          name: 'divider',
          ideas: [],
          issues: [],
          checked: true
        },
        {
          name: 'dropdown',
          ideas: [],
          issues: [
            'does not include the colors mixin',
            'menu -  this.cords? - i dont think are defined'
          ]
        },
        {
          name: 'icon',
          ideas: [],
          issues: [],
          checked: true
        },
        {
          name: 'image',
          ideas: [],
          issues: [],
          checked: true
        },
        {
          name: 'list',
          ideas: ['auto bullets and numbering'],
          issues: [],
          checked: true
        },
        {
          name: 'loader',
          ideas: ['add different loader animations'],
          issues: [],
          checked: true
        },
        {
          name: 'navbar',
          ideas: ['fixed positioning - probably just need css'],
          issues: [
            'does not include the colors mixin',
            'the group dropdown arrows animation is bad',
            'spacings between navbar items is bad',
            'spacing between "update" and it\'s icon is bad'
          ],
          checked: true
        },
        {
          name: 'notification',
          ideas: [],
          issues: ['document is not defined']
        },
        {
          name: 'pagination',
          ideas: [],
          issues: [
            'does not include the colors mixin',
            'document is not defined'
          ]
        },
        {
          name: 'progress',
          ideas: ['display the percentage'],
          issues: [],
          checked: true
        },
        {
          name: 'prompt',
          ideas: [],
          issues: ['buttons are screwy'],
          checked: true
        },
        {
          name: 'sidebar',
          ideas: [],
          issues: ['does not include the colors mixin']
        },
        {
          name: 'spacer',
          ideas: [],
          issues: [],
          checked: true
        },
        {
          name: 'table',
          ideas: [],
          issues: ['does not include the colors mixin'],
          checked: true
        },
        {
          name: 'tabs',
          ideas: [],
          issues: [],
          checked: true
        },
        {
          name: 'tooltip',
          ideas: ['after arrow should be positioned by the mouse movement'],
          issues: ['needs to display inside page always'],
          checked: true
        }
      ],
      ideas: [],
      issues: []
    }
  }
}
</script>
