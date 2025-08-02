import React from "react";
import { redirect } from "next/navigation";

const TestThree = async () => {
  //   redirect("/not-found");
  if (true) throw new Error("test errror!");
  const res: string = await new Promise((resolve) => {
    setTimeout(resolve, 3000, "hello");
  });

  return (
    <React.Fragment>
      <main className="flex flex-col space-y-5 min-h-screen bg-green-300 text-black">
        <h2 className="text-2xl text-red-700">{res}</h2>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
          mollitia ducimus eveniet!
        </span>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
          mollitia ducimus eveniet!
        </span>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
          mollitia ducimus eveniet!
        </span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
          provident quibusdam non pariatur distinctio ipsa autem neque incidunt,
          reprehenderit dolor doloribus. Mollitia enim aliquam inventore ullam
          magnam dolore sequi pariatur facilis libero! Hic veritatis quidem vel
          nisi reiciendis. Nihil aspernatur dolor ea, sequi repellat accusamus
          expedita debitis nulla, non excepturi enim provident atque hic odit
          quam cum corporis sit facere maxime aperiam. Possimus, recusandae
          vitae! Consectetur a sed corrupti delectus perspiciatis dignissimos
          necessitatibus iusto cumque animi ipsa vero ea amet eius nulla
          impedit, repudiandae atque fugit dolores praesentium fuga voluptatibus
          sit assumenda quam odit. Adipisci cumque quibusdam ex, nam asperiores
          obcaecati quis vero quam blanditiis numquam delectus neque laborum
          quas esse omnis ab aperiam voluptates pariatur aspernatur! Odit
          dolores recusandae iure repellat.
        </p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eius
        ullam facere?
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, eum
          hic odio explicabo corporis sapiente quaerat, vitae laudantium
          aliquam, accusantium esse suscipit magni. Explicabo commodi aspernatur
          ducimus? Quis dolore alias temporibus delectus asperiores eveniet
          obcaecati laboriosam officiis autem amet molestiae velit, possimus
          minus tempora accusamus doloribus ex architecto nemo omnis nihil sequi
          quia. Nulla nemo dolore perspiciatis iure natus, dolorem animi, quam
          aliquid necessitatibus tempora quas, odio ipsam rem inventore. Dolore
          inventore eius, dignissimos numquam magni ipsum itaque nobis dolor
          possimus sed accusantium fuga, optio praesentium tempora ex doloremque
          voluptatum iure quasi. Excepturi explicabo expedita at quos, obcaecati
          maxime iusto ratione ut fugit quod ad voluptatem minima alias optio
          inventore sit vel magnam laudantium veritatis culpa labore magni sunt
          rerum maiores! Esse numquam facilis temporibus iusto, fugiat quae eos
          ratione quos impedit blanditiis nemo ducimus. Iste nisi laborum
          officiis cumque, cum corporis quidem vel ipsa, necessitatibus
          voluptatem praesentium, architecto ab modi quisquam illo dolorem
          consectetur sequi excepturi possimus. Ab, deleniti architecto porro
          sint sit velit non totam, cum quidem incidunt pariatur atque accusamus
          ut est accusantium voluptas placeat itaque. Doloribus, culpa nobis
          quia maiores veniam necessitatibus porro nostrum quibusdam deleniti,
          ratione sequi a sunt fugiat architecto dolor voluptate minus
          distinctio at. Totam, excepturi eveniet! Repudiandae ipsum blanditiis
          illum eligendi quidem. Eaque placeat cupiditate odit libero, delectus
          laboriosam aut! Pariatur dicta, animi esse cumque modi rerum labore
          sequi vel harum beatae? Saepe, expedita.
        </div>
      </main>
    </React.Fragment>
  );
};

export default TestThree;
