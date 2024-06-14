import ExpCardBg from '@/components/experience/ExpCardBg'
import CareerPath from '@/types/CareerPath'
import React, { FC } from 'react'

interface ExpCardProps {
  data: CareerPath,
  isFlip: boolean
}

const ExpCard: FC<ExpCardProps> = ({
  data,
  isFlip
}) => {
  return <div
    className='relative w-full h-[400px]'
  >
    <div className={`h-full w-full py-2 lg:py-4 px-4 lg:px-7 ${isFlip? 'lg:pl-12': ''} flex flex-col`}>
      <div className="text-lg lg:text-2xl font-semibold mt-2">{data.title}</div>
      <div className="text-sm lg:text-lg font-semibold italic">{data.company}</div>
      <div className="text-sm lg:text-lg font-semibold text-[#915DFF] mt-2">{data.position}</div>
      <ul className="text-xs lg:text-base w-full list-disc pl-5 mt-2">
        {data.responsibilities.map((item, index) => {
          return <li key={index} className="">{item}</li>
        })}
      </ul>
      <div className="flex flex-1 flex-row overflow-hidden items-end">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 48 48" id="Pop-Cat-Hand-Drawn--Streamline-Memes"
          className="h-full aspect-square fill-foreground"
        ><desc>{"Pop Cat Hand Drawn Streamline Element: https://streamlinehq.com"}</desc><path  fillRule="evenodd" d="M16.932267 9.331709C15.402887 7.3435619999999995 11.732233999999998 4.284755 10.814183 3.6729089999999998C8.367785999999999 1.9904029999999997 7.144047 2.755375 6.379122 5.0492099999999995C5.920355 6.426028 4.849695 18.508553 4.849695 19.884853999999997C4.697133 24.014791 3.014157 28.739278 5.002304 31.492349999999995C6.225995999999999 33.174338999999996 5.155383 32.273067 2.2497019999999996 46.191224C2.2497019999999996 46.343786 2.2497019999999996 46.496865 2.4022639999999997 46.496865C2.861548 46.649474 2.798991 46.505043 4.327853999999999 40.846242999999994C5.704672 35.952368 6.379122 33.038039 6.532201 32.426193C6.684762999999999 31.661220999999998 5.155383 31.202453999999996 5.002820999999999 27.991084999999998C5.002820999999999 26.920471999999997 6.379122 6.272902 7.449217999999999 4.284755C7.755423 3.6729089999999998 8.061581 3.51983 8.673427 3.6729089999999998C9.437882 3.825471 10.508495 4.437317 11.119871 5.0492099999999995C16.932267 9.63735 16.167295 10.555401 16.932267 10.249242999999998C17.391034 10.096633999999998 20.602919999999997 8.567254 24.120447 8.10797C28.402946 7.3435619999999995 29.167400999999998 8.566737 29.473558999999998 7.955408C30.696780999999994 4.437364 32.532365999999996 1.8373239999999997 33.296821 1.072869C33.756105 1.378557 34.367434 2.1435289999999996 34.673639 2.602296C36.04994 4.437364 35.896814 4.743522 36.203019 4.59096C36.355581 4.59096 36.355581 4.437364 36.355581 4.284755C36.05041 3.6729089999999998 35.285485 2.44917 34.520513 1.5316359999999998C33.4499 0.155335 33.144211999999996 0.307944 32.685444999999994 0.91979C31.308673999999996 2.755375 30.085452 4.131676000000001 29.014839 7.3435619999999995C25.344185999999997 6.426028 20.602403 7.802328999999999 16.932267 9.332225999999999Z" clipRule="evenodd" strokeWidth={1} /><path  fillRule="evenodd" d="M36.04994 4.589926C36.967474 6.119822999999999 37.120553 8.10797 37.120553 9.943038C37.120553 10.401805 38.344245 10.249242999999998 40.638079999999995 13.001845C43.849965999999995 16.978656 44.614937999999995 22.025609999999997 43.085511 26.766876C41.096847 32.884443 37.273632 34.873107 37.57932 35.637562C38.49685399999999 39.155089 38.955620999999994 42.213896 39.873155 46.037628C39.873155 46.343786 40.332438999999994 46.190706999999996 40.332438999999994 45.885019C39.56746699999999 42.520053999999995 39.10869999999999 39.00252699999999 38.343774999999994 35.637562C48.285544 26.461188 45.532472 13.460612 37.732399 9.789959C37.732399 7.801811999999999 37.426241 5.966743999999999 36.508707 4.437364C36.203019 3.9785969999999997 35.896814 4.284755 36.04994 4.589926Z" clipRule="evenodd" strokeWidth={1} /><path  fillRule="evenodd" d="M32.838054 14.072458C17.084829 12.23739 8.672956999999998 31.508142 25.344185999999997 34.261261C27.179254 34.566902 29.167400999999998 34.720028 31.002986 34.261261C34.673639 33.34321 38.344245 30.284402999999998 40.332438999999994 27.072563999999996C44.003045 21.566843 40.638079999999995 15.754964 34.367434 14.378663C33.738292 14.240295 33.585682999999996 14.900974 34.367434 15.089678999999999C38.802541999999995 16.160292 42.050007 19.837055 40.673189 24.425711999999997C39.603092999999994 27.790207 35.132405999999996 32.272597 30.696780999999994 33.34321C25.496747999999997 34.566902 16.844283 31.928744999999996 17.608738 25.046253C18.220584 19.387452999999997 24.149445999999998 13.919896 32.71444399999999 14.83743C33.613695 14.934061999999999 33.556214 14.155883 32.838054 14.072458Z" clipRule="evenodd" strokeWidth={1} /><path  fillRule="evenodd" d="M24.885419 15.449276000000001C29.932326 15.143587999999998 36.356097999999996 18.049269 38.803012 21.108076C40.944284999999994 23.861195 39.87367199999999 25.237966 40.48551799999999 25.390575C40.638079999999995 25.390575 40.79115899999999 25.237966 40.79115899999999 25.237966C41.403051999999995 19.119929 32.226161 14.225537 24.885419 14.990509C24.579213999999997 14.990509 24.579213999999997 15.449276000000001 24.885419 15.449276000000001Z" clipRule="evenodd" strokeWidth={1} /><path  fillRule="evenodd" d="M37.46332399999999 10.770567C33.893392 9.827606 33.379211999999995 10.758346999999999 35.80220299999999 11.309703999999998C38.841176 11.979030999999999 38.738951 10.929756 37.052403 10.691747999999999L37.46332399999999 10.770567Z" clipRule="evenodd" strokeWidth={1} /><path  fillRule="evenodd" d="M33.970707 10.099689C33.679307 10.215168 33.713381999999996 10.565083 33.79018 10.837213C34.757534 11.966811 39.372181999999995 12.252665 38.285259999999994 10.928722C37.88294 10.422156 34.886737 9.674997 33.970707 10.099689ZM37.865644 11.276615999999999L37.822921 11.354448L37.865644 11.276615999999999ZM35.194446 10.76394C36.872862999999995 11.429224999999999 38.773026 11.279671 36.923716999999996 10.924679999999999C36.71875 10.885012 36.102298 10.766478 35.194446 10.76394ZM34.663956999999996 10.489789C34.70668 10.412003999999998 34.501196 10.372806 34.663956999999996 10.489789Z" clipRule="evenodd" strokeWidth={1} /><path  fillRule="evenodd" d="M19.79217 12.344691C15.186217000000001 13.148297 15.230961 15.373464999999998 17.340697 15.111533999999999C19.602477999999998 14.648724999999999 21.982276 12.204865999999999 19.79217 12.344691Z" clipRule="evenodd" strokeWidth={1} /><path  fillRule="evenodd" d="M19.863375 12.021754C17.987135 12.204818999999999 14.952767999999999 13.226645999999999 15.688694 14.770783999999999C16.666763999999997 16.681616 21.855611 13.740355999999998 20.886705999999997 12.274519999999999C20.724978999999998 12.030401999999999 20.015984 11.820829 19.863375 12.021754ZM20.105988999999997 12.387930999999998C19.953426999999998 12.588856 19.324755 12.501858999999998 17.852856 13.29583C17.385440999999997 13.453467999999999 16.146473999999998 14.168573 16.62202 14.456964999999999C17.42055 15.233122999999999 21.910037 12.527803 20.105988999999997 12.388447999999999Z" clipRule="evenodd" strokeWidth={1} /><path  fillRule="evenodd" d="M10.508495 5.2022889999999995C7.296656 3.213625 7.602297 9.331709 7.755423 13.002362C7.755423 13.919896 7.907985 15.296196999999998 8.672956999999998 15.755433999999997C10.202854 16.672968 12.496688999999998 13.614208 13.720381 12.23739C14.484836 11.319856 15.555448999999998 10.861088999999998 14.332273999999998 8.872941999999998C13.567301999999998 7.649202999999999 12.496688999999998 6.884277999999999 11.27295 6.119822999999999C10.967778999999998 5.967261 10.814183 6.425511 10.967309 6.578589999999999C12.037922 7.3435619999999995 13.108535 8.10797 13.720381 9.17863C14.637915 10.70801 13.87299 10.861088999999998 13.108535 11.778623C12.34361 12.696157 9.896648999999998 15.602355 8.978598 15.143587999999998C8.520347999999998 14.83743 8.520347999999998 13.614208 8.520347999999998 13.154924C8.367269 9.790476 7.602814 4.284755 10.202854 5.814134999999999C10.508025 5.814134999999999 10.814183 5.354851 10.508025 5.2022889999999995Z" clipRule="evenodd" strokeWidth={1} /><path  fillRule="evenodd" d="M30.39114 13.307485999999999C29.932373 13.154924 27.7911 12.390469 27.638021 12.849236C27.638021 13.154924 27.7911 13.154924 28.708634 13.613691C29.167400999999998 13.919849 29.626167999999996 14.072458 30.238014 14.072458C31.002986 14.225537 31.461752999999995 12.849236 31.156065 11.931185C31.156065 11.625544 30.696780999999994 11.778623 30.696780999999994 11.931185C30.849906999999995 12.543078 30.544219000000002 13.001845 30.39114 13.308003Z" clipRule="evenodd" strokeWidth={1} /><path  fillRule="evenodd" d="M28.096788 7.802328999999999C28.708634 7.955408 29.32048 8.261566 30.085452 8.414175C31.308673999999996 8.720332999999998 32.379287 8.872941999999998 33.144211999999996 9.026021C33.4499 9.17863 33.602979 8.720332999999998 33.296821 8.567254C30.696780999999994 7.496640999999999 29.932373 7.496640999999999 28.096788 7.3435619999999995C27.7911 7.1909529999999995 27.7911 7.649719999999999 28.096788 7.802328999999999Z" clipRule="evenodd" strokeWidth={1} /></svg>
        <div className="flex lg:hidden text-sm lg:text-lg font-semibold mt-2">{data.date}</div>
      </div>
    </div>
    <ExpCardBg
      isFlip={isFlip}
    />
  </div>
}

export default ExpCard