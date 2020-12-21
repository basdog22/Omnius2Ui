<template>
  <div v-bind:class="{'container-fluid':page.page.meta.width && page.page.meta.width=='fluid', 'container': !page.page.meta}">
    <header v-if="page.header">
      <div v-for="row in page.header.rows" class="row">
        <div v-for="grid in row.grids" :class="grid.class">
          <div v-for="block in grid.blocks" :id="block.id">
            <span v-html="block.content.en"></span>
          </div>
        </div>
      </div>
    </header>

    <main class="row">
      <aside v-if="page.left" v-bind:class="{'col-md-4':page.left && !page.right,'col-md-3':page.right && page.right}">
        <div v-for="row in page.left.rows" class="row">
          <div v-for="grid in row.grids" :class="grid.class">
            <div v-for="block in grid.blocks" :id="block.id">
              <span v-html="block.content.en"></span>
            </div>
          </div>
        </div>
      </aside>
      <section :class="getClass(page)">
        <div v-for="row in page.layout.rows" class="row">
          <div v-for="grid in row.grids" :class="grid.class">
            <div v-for="block in grid.blocks" :id="block.id">
              <span v-html="block.content.en"></span>
            </div>
          </div>
        </div>
      </section>
      <aside v-if="page.right" v-bind:class="{'col-md-4':page.right && !page.left,'col-md-3':page.right && page.left}">
        <div v-for="row in page.right.rows" class="row">
          <div v-for="grid in row.grids" :class="grid.class">
            <div v-for="block in grid.blocks" :id="block.id">
              <span v-html="block.content.en"></span>
            </div>
          </div>
        </div>
      </aside>
    </main>
    <footer v-if="page.footer">
      <div v-for="row in page.footer.rows" class="row">
        <div v-for="grid in row.grids" :class="grid.class">
          <div v-for="block in grid.blocks" :id="block.id">
            <span v-html="block.content.en"></span>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>




<script>
export default {
  name: 'Login',
  data () {
    return {
      page: ""
    }
  },
  methods: {
    getClass: function (page){
      if(page.left && page.right){
        return 'col-md-6'
      }
      if(page.left || page.right){
        return 'col-md-8'
      }

      return 'col-md-12'
    }
  },
  created() {
    this.$http.get('http://localhost/Omnius2/public/blocks/login')
      .then(response => (this.page = response.data))
  },

}
</script>
