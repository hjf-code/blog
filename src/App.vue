<template>
  <el-config-provider namespace="ep">
    <BaseHeader />
    <div style="display: flex">
      <BaseSide />
      <div>
        黄建峰的学习笔记
        <div
          style="
            height: 16px;
            width: 100%;
            position: fixed;
            bottom: 5px;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 12px;
          "
        >
          <img :src="police" title="备案" style="width: 16px; height: 16px;"/>
          <a
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=43100302000292"
            target="_blank"
          >
            &nbsp;湘公网安备 43100302000292号
          </a>
          <span>&nbsp;|&nbsp;</span>
          <a href="https://beian.miit.gov.cn/" target="_blank">
            湘ICP备2023002259号-1
          </a>
        </div>
      </div>
    </div>
  </el-config-provider>
</template>

<script lang="ts" setup>
  import police from '~/assets/police.png'
</script>

<style>
#app {
  text-align: center;
  color: var(--ep-text-color-primary);
}

.element-plus-logo {
  width: 50%;
}
</style>
