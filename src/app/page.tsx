export default function Home() {
  return (
    <main>
      {/* HEADER */}
      <h1 className="p-2 sm:p-0 sm:ml-1 mt-8 text-6xl text-start">
        Center Truck
      </h1>

      <section className="grid grid-cols-1 sm:grid-cols-4">
        {/* TABLE OF CONTENT */}
        <div>
          <div className="sm:fixed flex flex-col mt-7 p-4 h-fit w-ful sm:w-72 rounded-lg shadow-md bg-secondary/15 backdrop-blur-sm">
            <p className="p-1 pt-2 text-sm font-bold">Nesse documento</p>
            <a
              href="#diagnostico-pesquisa"
              className="p-1 pt-1 text-sm rounded-lg hover:bg-primary/5"
            >
              1. diagnóstico & pesquisa
            </a>
            <a
              href="#proposta"
              className="p-1 text-sm rounded-lg hover:bg-primary/5"
            >
              2. proposta
            </a>
            <a
              href="#timeline"
              className="p-1 text-sm rounded-lg hover:bg-primary/5"
            >
              3. timeline
            </a>
            <a
              href="#valores"
              className="p-1 text-sm rounded-lg hover:bg-primary/5"
            >
              4. valores
            </a>
          </div>
        </div>

        {/* CONTENT */}
        <div className="col-span-3 mt-4 sm:ml-10 p-2 sm:p-4">
          <p className="text-3xl">PROJETO 2026.03.12</p>

          {/* DIGNÓSTICO & PESQUISA */}
          <section>
            <p className="mt-6 text-xl font-bold">■</p>
            <h1
              id="diagnostico-pesquisa"
              className="text-2xl font-bold text-start"
            >
              dignóstico & pesquisa
            </h1>

            <div className="mt-2 sm:mr-40">
              <p className="normal-case">
                Empreendimento no setor automotivo rodoviário especializado nos
                serviços de <span className="code">estacionamento</span>,{" "}
                <span className="code">lavagem</span> e{" "}
                <span className="code">manutenção</span> de veículos. Com base
                de clientes majoritariamente recorrente, composta por usuários
                mensais e quinzenais, havendo poucos atendimentos avulsos.
                <br />
              </p>
            </div>

            <article>
              <p className="mt-6 text-lg font-bold text-start">desafio atual</p>
              <div className="mt-2 sm:mr-40">
                <p className="normal-case">
                  Os processos manuais feitos em papel se tornaram um gargalo na
                  operação, demandando tempo, pessoas e recursos que poderiam
                  estar direcionados a atividades mais estratégicas da empresa.
                  <br />
                  <br />O desafio é modernizar a operação, substituindo a
                  utilização da antiga ordem de serviço em papel por um sistema
                  de gerenciamento, capaz de aumentar a eficiência e agilizar as
                  atividades do dia a dia.
                </p>
              </div>
            </article>

            <article>
              <p className="mt-6 text-lg font-bold text-start">objetivos</p>
              <div className="mt-2 sm:mr-40 normal-case">
                <p className="p-1 ring-1 ring-secondary/50 rounded-md bg-secondary/10">
                  <span className="code">[1]</span> O objetivo principal é
                  eliminar o uso de papel, reduzindo erros humanos e criando uma
                  base de dados unificada com informações relevantes,
                  organizadas e precisas sobre toda a operação.
                </p>
                <p className="p-1 ring-1 ring-secondary/50 rounded-md bg-secondary/10">
                  <span className="code">[2]</span> Automatizar o registro de
                  entrada de veículos por imagem, vinculando automaticamente
                  placa, cliente e motorista*.
                </p>
                <p className="p-1 ring-1 ring-secondary/50 rounded-md bg-secondary/10">
                  <span className="code">[3]</span> Envio automático de
                  notificações por e-mail aos clientes sobre o andamento do
                  serviço.
                </p>
                <p className="p-1 ring-1 ring-secondary/50 rounded-md bg-secondary/10">
                  <span className="code">[4]</span> Relatórios de vendas e
                  financeiros organizados por período.
                </p>
                <p className="p-1 ring-1 ring-secondary/50 rounded-md bg-secondary/10">
                  <span className="code">[5]</span> Disponibilização de
                  agendamento online com lista de serviços, horários disponíveis
                  e valores.
                </p>
              </div>
            </article>

            <article className="sm:mr-40">
              <p className="mt-6 text-lg font-bold text-start">priorização</p>
              <p className="normal-case">
                Existem três serviços com complexidades e particularidades
                distintas, que devem ser tratados individualmente, seguindo uma
                ordem de prioridade.
                <br />
                <br />
              </p>
              <p className="normal-case font-bold">
                O serviço de lavagem demanda prioridade máxima na etapa inicial.
              </p>
              <div className="mt-2 ring-1 ring-secondary/50 rounded-md bg-secondary/10">
                <table className="w-full">
                  <tbody className="normal-case align-text-top">
                    <tr>
                      <td className="uppercase font-bold p-2 ring-1 ring-secondary/50 rounded-md">
                        lavagem
                      </td>
                    </tr>
                    <tr>
                      <td className="uppercase p-2 ring-1 ring-secondary/50 rounded-md">
                        manutenção
                      </td>
                    </tr>
                    <tr>
                      <td className="uppercase p-2 ring-1 ring-secondary/50 rounded-md">
                        estacionamento
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </article>
          </section>

          {/* PROPOSTA */}
          <section>
            <p className="mt-24 text-xl font-bold">■</p>
            <h1 id="proposta" className="text-2xl font-bold text-start">
              proposta
            </h1>

            <div className="mt-2 sm:mr-40">
              <p className="normal-case">
                A solução proposta para os desafios atuais é o desenvolvimento
                de um
                <span className="font-bold"> sistema unificado de gestão</span>.
                Devido às particularidades e complexidades de cada serviço, o
                desenvolvimento precisa ser dividido em{" "}
                <span className="font-bold"> módulos</span> distintos,
                permitindo melhor organização do projeto e otimização de tempo e
                recurso.
                <br />
                <br />
              </p>
              <p className="normal-case">1. Módulo de lavagem</p>
              <p className="normal-case">2. Módulo de manutenção</p>
              <p className="normal-case">3. Módulo de estacionamento</p>
              <p className="normal-case">
                <br />
                Considerando as necessidades de uso, o sistema pode ter como
                base de acesso um aplicativo web, garantindo flexibilidade de
                utilização em <span className="font-bold">celulares</span>,{" "}
                <span className="font-bold">tablets</span> e{" "}
                <span className="font-bold">computadores</span>.
              </p>
            </div>
          </section>

          {/* TIMELINE */}
          <section>
            <p className="mt-24 text-xl font-bold">■</p>
            <h1 id="timeline" className="text-2xl font-bold text-start">
              timeline
            </h1>

            <div className="mt-2 sm:mr-40 normal-case">
              <p>
                Passamos por quatro etapas no processo de construção do sistema.
              </p>
              <p>
                <span className="font-bold">1. Diagnóstico e pesquisa</span>
                <br />
                Nesse primeiro momento o negócio é estudado e mapeado com
                detalhe para entender os fluxos e processos. Se necessário
                poderá ser realizado entrevistas com colaboradores e visitas
                técnicas.
              </p>
              <p>
                <span className="font-bold">2. Desenvolvimento</span>
                <br />
                No desenvolvimento priorizamos a entregar de uma versão teste do
                sistema com as principais funcionalidades para o uso diário,
                permitindo identificar padrões de uso, coletar feedbacks e
                mapear novas necessidades ainda não identificadas.
              </p>
              <p>
                <span className="font-bold">3. Implementação</span>
                <br /> Implantação da versão final do sistema, contendo todos os
                módulos e funcionalidades definidos, com acompanhamento próximo
                e suporte durante a migração de dados e treinamento dos usuários
                para utilização da plataforma.
              </p>
              <p>
                <span className="font-bold">4. Refinamento</span>
                <br />
                Coletar feedbacks para realizar ajustes. Fazer correções de
                bugs. Melhorar o design das interfaces. Essa etapa final é para
                olhar os detalhes e certificar qualidade máxima na entrega.
              </p>
            </div>

            <article className="sm:mr-40">
              <div className="mt-2 ring-1 ring-secondary/50 rounded-md bg-secondary/10">
                <table className="w-full">
                  <thead className="ring-1 ring-secondary/50 rounded-md">
                    <tr>
                      <th className="p-2 text-left ring-1 ring-secondary/50 rounded-md">
                        prazo estimado
                      </th>
                      <th className="p-2 text-left ring-1 ring-secondary/50 rounded-md">
                        etapa
                      </th>
                    </tr>
                  </thead>
                  <tbody className="normal-case align-text-top">
                    <tr>
                      <td className="p-2 ring-1 ring-secondary/50 rounded-md">
                        10 a 20 dias
                      </td>
                      <td className="p-2 ring-1 ring-secondary/50 rounded-md">
                        Diagnóstico e pesquisa
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 ring-1 ring-secondary/50 rounded-md">
                        30 a 40 dias
                      </td>
                      <td className="p-2 ring-1 ring-secondary/50 rounded-md">
                        Desenvolvimento
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 ring-1 ring-secondary/50 rounded-md">
                        50 a 60 dias
                      </td>
                      <td className="p-2 ring-1 ring-secondary/50 rounded-md">
                        Implementação
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 ring-1 ring-secondary/50 rounded-md">
                        O tempo necessário
                      </td>
                      <td className="p-2 ring-1 ring-secondary/50 rounded-md">
                        Refinamento
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </article>

            <div className="mt-2 sm:mr-40 normal-case">
              <p>
                O tempo estimado para garantir a máxima qualidade na entrega é
                de{" "}
                <span className="font-bold">
                  3 a 4 meses para o módulo inicial
                </span>
                . Os módulos seguintes tendem a ter{" "}
                <span className="font-bold">
                  tempo de desenvolvimento reduzido
                </span>
                , devido ao reaproveitamento da estrutura já construída.
                <br />
              </p>
              <p className="normal-case">
                <br /> O desenvolvimento seguirá um modelo iterativo. Caso
                surjam novas necessidades ou obstáculos técnicos, o ciclo pode
                ser retomado desde a primeira etapa. Por exemplo, se durante a
                implementação forem identificados problemas técnicos, será
                possível retornar à fase de diagnóstico e pesquisa para definir
                uma solução mais adequada.
              </p>
            </div>
          </section>

          {/* VALORES */}
          <section>
            <p className="mt-24 text-xl font-bold">■</p>
            <h1 id="valores" className="text-2xl font-bold text-start">
              valores
            </h1>

            <div className="mt-2 sm:mr-40">
              <p className="normal-case">
                Os valores apresentados abaixo referem-se ao desenvolvimento do
                sistema.
              </p>
            </div>

            <div className="mt-8 sm:mr-40">
              <p className="font-bold text-xl">R$ 24.000,00</p>
              <p className="font-bold text-lg normal-case">
                Todos os 3 Módulos
              </p>
              <p className="text-sm normal-case">R$ 8.000,00 por módulo</p>
              <p className="text-sm normal-case">
                Pagamento ao longo das etapas de desenvolvimento.
              </p>
            </div>

            <div className="mt-8 sm:mr-40">
              <p className="font-bold text-xl">R$ 18.000,00</p>
              <p className="font-bold text-lg normal-case">Escolha 2 Módulos</p>
              <p className="text-sm normal-case">R$ 9.000,00 por módulo</p>
              <p className="text-sm normal-case">
                Pagamento ao longo das etapas de desenvolvimento.
              </p>
            </div>

            <div className="mt-8 sm:mr-40">
              <p className="font-bold text-xl">R$ 10.000,00</p>
              <p className="font-bold text-lg normal-case">Escolha 1 Módulo</p>
              <p className="text-sm normal-case">R$ 10.000,00 por módulo</p>
              <p className="text-sm normal-case">Pagamento 0 + 30 dias de R$ 5.000,00 ou</p>
              <p className="text-sm normal-case">Em até 10x sem juros no cartão de crédito.</p>

            </div>

            <div className="mt-8 sm:mr-40">
              <p className="normal-case">
                Após o desenvolvimento e a entrada em operação, o sistema terá
                uma assinatura mensal de R$ 299,00, que inclui suporte,
                manutenção e atualizações.
              </p>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
