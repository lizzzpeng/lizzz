<template>
    <div>
        这是一个空界面
    </div>
</template>

<script>
export default {
    name: 'MainContain2',
    data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
}
</script>

<style scoped>
/* .LineInformationContent {
    width: 265x;
    height: 100%;
    background: #F7F8FA;
    border: 1px solid #E5E9EE;
    border-radius: 2px;
    margin-right: 18px;
    margin-bottom: 18px;
    transition: all .5s;
}
 */



</style>