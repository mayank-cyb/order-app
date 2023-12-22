<template>
  <table
    class="table table-bordered"
    aria-describedby=""
    cellpadding="0"
    cellspacing="0"
  >
    <tr>
      <th
        v-for="n in 6"
        :key="`th-${n}`"
      >
        {{ n }}
      </th>
    </tr>
    <tr
      v-for="n1 in 7"
      :key="`tr-${n1}`"
    >
      <td
        v-for="n2 in 6"
        :key="`td-${n2}`"
      >
        Print Status {{ n2 }}
      </td>
    </tr>
  </table>
</template>

<style lang="scss">
    @import '@/assets/variables.scss';
    table {
        display: grid;
        margin: 0 0 0 auto; 
    }
    tr {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        height: 5rem;
        &:nth-of-type(2n+1) {
            background: $color_grey;
        }
    }
    th,
    td {
        display: flex;
        align-items: center;
        justify-content: center;
        border-right: 0.125rem solid #D2D8E3;
        &:last-of-type {
            
            border-right: none;
        }
    }
</style>