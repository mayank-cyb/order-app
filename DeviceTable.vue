<template>
  <table class="table table-bordered" aria-describedby="" cellpadding="0" cellspacing="0">
    <tr>
        <th v-for="n in 6" :key="`th-${n}`">{{ n }}</th>
    </tr>
    <tr v-for="n in 7" :key="`tr-${n}`">
      <td v-for="n in 6" :key="`td-${n}`">Print Status {{ n }}</td>
    </tr>
  </table>
</template>

<style lang="scss">
    @import '../assets/variables.scss';
    table {
        display: grid;
        //max-width: 50.4375rem;
        margin: 0 0 0 auto; 
    }
    tr {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        height: 5rem;
        &:nth-of-type(2n+1) {
            background: $colorGrey;
        }
    }
    th,
    td {
        display: flex;
        align-items: center;
        justify-content: center;
        border-right: 0.125rem solid #D2D8E3;
        &:last-of-type {
            border-right: none !important;
        }
    }
</style>