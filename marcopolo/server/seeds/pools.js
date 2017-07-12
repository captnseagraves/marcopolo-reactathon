exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('pools').del()
    .then(function () {
      return knex('pools').insert([
        {id: 1, name: 'Dog Water', description: 'This Pool is dog friendly!!', created_at: '2016-06-26T14:26:16.000Z', updated_at: '2016-06-26T14:26:16.000Z'},
        {id: 2, name: 'Tranquil Pool', description: 'This Pool is Relaxing',created_at: '2016-06-26T14:26:16.000Z', updated_at: '2016-06-26T14:26:16.000Z'},
        {id: 3, name: 'Garbage Pool', description: 'If you want hepatitis this pool is for you!', created_at: '2016-06-26T14:26:16.000Z', updated_at: '2016-06-26T14:26:16.000Z'},
        {id: 4, name: 'Llama Pool', description: 'I have no words', created_at: '2016-06-26T14:26:16.000Z', updated_at: '2016-06-26T14:26:16.000Z'},
        {id: 5, name: 'Dumpster Dive Pool', description: 'Dive in and see what treasures you will find', created_at: '2016-06-26T14:26:16.000Z', updated_at: '2016-06-26T14:26:16.000Z'},
        {id: 6, name: 'No Diving Pool', description: 'Dive at your own risk...belly flops encouraged...spinal injuries likely', created_at: '2016-06-26T14:26:16.000Z', updated_at: '2016-06-26T14:26:16.000Z'},
        {id: 7, name: 'Overcrowded Pool', description: 'Standing room only...why is it so warm?', created_at: '2016-06-26T14:26:16.000Z', updated_at: '2016-06-26T14:26:16.000Z'}
      ]);
    }).then(function(){
      return knex.raw("SELECT setval('pools_id_seq', (SELECT MAX(id) FROM pools))")
    });
};
