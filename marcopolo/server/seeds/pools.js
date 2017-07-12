exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('pools').del()
    .then(function () {
      return knex('pools').insert([
        {id: 1, name: 'Dog Water', description: 'This Pool is dog friendly!!',  image: '../images/DogWater.jpg', created_at: '2016-06-26T14:26:16.000Z', updated_at: '2016-06-26T14:26:16.000Z'},
        {id: 2, name: 'Tranquil Pool', description: 'This Pool is Relaxing', image: '../images/TranquilPool.jpg', created_at: '2016-06-26T14:26:16.000Z', updated_at: '2016-06-26T14:26:16.000Z'},
        {id: 3, name: 'Garbage Pool', description: 'If you want hepatitis this pool is for you!', image: 'http://i.imgur.com/D2yhJfV.jpg', created_at: '2016-06-26T14:26:16.000Z', updated_at: '2016-06-26T14:26:16.000Z'},
        {id: 4, name: 'Llama Pool', description: 'I have no words',  image: 'https://i.ytimg.com/vi/e_FsY-2SW1g/hqdefault.jpg', created_at: '2016-06-26T14:26:16.000Z', updated_at: '2016-06-26T14:26:16.000Z'},
        {id: 5, name: 'Dumpster Dive Pool', description: 'Dive in and see what treasures you will find',  image: 'http://ww3.foundshit.com/pictures/design/dumpster-pool-01.jpg', created_at: '2016-06-26T14:26:16.000Z', updated_at: '2016-06-26T14:26:16.000Z'},
        {id: 6, name: 'No Diving Pool', description: 'Dive at your own risk...belly flops encouraged...spinal injuries likely',  image: 'http://i.imgur.com/tzZ33Y6.jpg', created_at: '2016-06-26T14:26:16.000Z', updated_at: '2016-06-26T14:26:16.000Z'},
        {id: 7, name: 'Overcrowded Pool', description: 'Standing room only...why is it so warm?',  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyxmv-8QnFvWrv3hCAjtRX3mnSGa6-nd00LILlns1M22pzdwjZGw', created_at: '2016-06-26T14:26:16.000Z', updated_at: '2016-06-26T14:26:16.000Z'}
      ]);
    }).then(function(){
      return knex.raw("SELECT setval('pools_id_seq', (SELECT MAX(id) FROM pools))")
    });
};
