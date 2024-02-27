<template>
    <!-- <section v-for="panel in this.panels" :key="panel" class="panel" :class="panel.name"> -->
    <component v-for="panel in this.panels" :key="panel" :is="panel.component.name" v-bind="panel.props" />
</template>
<script>
import gql from "graphql-tag";
import { useQuery } from "@vue/apollo-composable";
import HeroscreenPanel from '@/components/panels/HeroscreenPanel.vue'
import SimplePanel from '@/components/panels/SimplePanel.vue'

export default {
  name: "DisplayPanels",
  props: ["pageName"],
  data() {
    return {
        panels: [],
        panelsMapping: [],
        backendApiUrl: 'http://localhost:1337'
    };
  },
  components: {
    HeroscreenPanel,
    SimplePanel,
  },
  methods: {

    getPanelQuery() {
      return gql`
        query ${this.pageName} {
          ${this.pageName} {
            data {
              attributes {
                panels {
                  ... on ComponentPanelsHeroscreen {
                    image {
                      data {
                        attributes {
                          url
                        }
                      }
                    }
                  }
                  ... on ComponentPanelsSimple {
                    content
                  }
                }
              }
            }
          }
        }
      `;
    },
    async getPanels() {
        const { result } = await useQuery(this.getPanelQuery());

        setTimeout(() => {
            const panelResult = result.value[this.pageName].data.attributes.panels;

            panelResult.forEach(panel => {
                this.panels.push({
                    name: panel.__typename.split('Panels')[1] + 'Panel',
                    panel: panel
            });
                
            });
            this.getProps();

        }, 1000)
        
    },
    getProps() {
        this.panels.forEach(panel => {
            switch (panel.name) {
                case ('HeroscreenPanel') :
                    this.getHeroscreenProp(panel)
                    break;
                case ('SimplePanel') :
                    this.getSimpleProp(panel)
            }

            delete panel.panel;
        })
    },
    getHeroscreenProp(panel) {
        panel.component = HeroscreenPanel;
        panel.props = {
            imageUrl: this.backendApiUrl + panel.panel.image.data.attributes.url
        };
        
    },
    getSimpleProp(panel) {
        panel.component = SimplePanel;
        panel.props = {
            content: panel.panel.content[0].children[0].text
        };
    },
  },
  mounted() {
      this.getPanels();
  }
};
</script>