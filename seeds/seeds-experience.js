/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('experience').del()
  await knex('experience').insert(
    [
      {
        company: 'KlikCair',
        position: 'Back-End Developer',
        startDate: '2019-04-01',
        endDate: '2019-06-01',
        description: "KlikCair is a Peer to Peer (P2P) Financial Technology (Fintech) company in Indonesia with a mission to foster a more inclusive economy through empowering SME's. KlikCair connects potential SME's and has the desire to develop its capacity with investors."
      },
      {
        company: "Bizzy Indonesia",
        position: 'Fullstack Javascript Engineer',
        startDate: '2019-07-01',
        endDate: '2021-07-01',
        description: "Bizzy.co.id is the first B2B marketplace equipped with eProcurement platform in Indonesia with its own logistics and distribution networks. We have a mission to underpin a clean economy by powering an inclusive digital business ecosystem that enables transparent, efficient, and accountable commerce for all stakeholders."
      },
      {
        company: "DKatalis (Digital Katalis)",
        position: 'Software Engineer',
        startDate: '2021-08-01',
        description: "DKATALIS is a tech company, focusing on building scalable digital solutions to stimulate, and ultimately catalyse growth through technology. Our latest work, Jago App, showcases our radical approach on technology and commitment to deliver a solution that truly solves problems."
      },
    ]
  );
};
