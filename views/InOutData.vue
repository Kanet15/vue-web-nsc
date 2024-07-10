<!-- src/components/TableComponent.vue -->
<template>
  <div class="overflow-x-auto">
    <table class="min-w-full bg-white border border-gray-200">
      <thead class="bg-gray-200">
        <tr>
          <th class="py-2 px-4 border-b">Header 1</th>
          <th class="py-2 px-4 border-b">Header 2</th>
          <th class="py-2 px-4 border-b">Header 3</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row.id">
          <td class="py-2 px-4 border-b">{{ row.col1 }}</td>
          <td class="py-2 px-4 border-b">{{ row.col2 }}</td>
          <td class="py-2 px-4 border-b">{{ row.col3 }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TableComponent",
  data() {
    return {
      rows: [
        {
          id: 1,
          col1: "Row 1 Col 1",
          col2: "Row 1 Col 2",
          col3: "Row 1 Col 3",
        },
        {
          id: 2,
          col1: "Row 2 Col 1",
          col2: "Row 2 Col 2",
          col3: "Row 2 Col 3",
        },
        {
          id: 3,
          col1: "Row 3 Col 1",
          col2: "Row 3 Col 2",
          col3: "Row 3 Col 3",
        },
      ],
    };
  },
};
</script>
