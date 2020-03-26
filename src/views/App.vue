<template>
  <v-app>
    <v-app-bar
      app
      flat
      dense
    >
      <v-toolbar-title v-text="$vuetify.lang.t('$vuetify.title')" />

      <template v-slot:extension>
        <v-tabs
          v-model="tabs.model"
          fixed-tabs
        >
          <v-tabs-slider />

          <v-tab>
            <v-icon
              v-if="$vuetify.breakpoint.xs"
              class="mr-2"
            >
              mdi-flask-outline
            </v-icon>
            <span v-if="$vuetify.breakpoint.smAndUp">{{ $vuetify.lang.t('$vuetify.tabs.tablet') }}</span>
          </v-tab>
          <v-tab>
            <v-icon
              v-if="$vuetify.breakpoint.xs"
              class="mr-2"
            >
              mdi-grid
            </v-icon>
            <span v-if="$vuetify.breakpoint.smAndUp">{{ $vuetify.lang.t('$vuetify.tabs.record_sheet') }}</span>
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-content>
      <v-container fill-height>
        <v-tabs-items
          v-model="tabs.model"
          class="flex-full-size"
        >
          <v-tab-item class="flex-full-size">
            <TabletComponent v-model="tablet" />
          </v-tab-item>

          <v-tab-item class="flex-full-size">
            <RecordSheetComponent v-model="tablet" />
          </v-tab-item>
        </v-tabs-items>
      </v-container>
    </v-content>
  </v-app>
</template>

<style lang="scss" scoped>
.flex-full-size {
  flex: 1;
  height: 100%;
}
</style>

<script lang="ts" src="@/view-models/AppView" />
