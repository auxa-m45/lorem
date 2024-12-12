import type { Context } from 'https://edge.netlify.com'

const repeatedText = `Lorem ipsum odor amet, consectetuer adipiscing elit. Sem facilisis risus facilisi euismod massa suspendisse imperdiet accumsan. Felis quisque elit purus congue, etiam dictumst cubilia mauris. Netus auctor eget duis mi montes gravida sit praesent. Mauris at faucibus fringilla ante velit cras amet lacus justo. Molestie purus blandit praesent nullam augue sagittis habitant nibh id. Leo eget odio faucibus dictum amet at. Conubia molestie rutrum; in ut laoreet interdum cursus. Eleifend amet nisi commodo quisque curae id. Adipiscing nisl hendrerit rhoncus accumsan taciti.
Facilisi vitae vulputate nec platea montes molestie. Torquent in nulla ridiculus mauris nascetur suspendisse ante mi. Et nam primis malesuada facilisi et. Sociosqu sociosqu conubia lobortis; ut sit gravida! Adipiscing porttitor enim semper sagittis tortor mattis placerat? Cursus sit turpis litora habitasse sem a velit.
Primis turpis bibendum quis ut praesent vulputate ipsum maximus. Montes rutrum malesuada eleifend integer nisl vel cras ornare. Vivamus vel fames rhoncus eget aenean diam. Gravida commodo himenaeos suspendisse libero donec nascetur netus. Donec tristique penatibus conubia urna malesuada sem. Integer sem leo ante suspendisse mi sed parturient. Sagittis erat nulla lobortis tempor himenaeos. Lacinia pulvinar est primis venenatis mi nunc. Semper ad sapien mus est litora.
Dolor egestas auctor penatibus faucibus mattis nisl integer pharetra pharetra. In duis lacinia leo tempor; commodo tristique porta dis. Ipsum tellus ultricies a fringilla tempus augue penatibus interdum convallis. Efficitur feugiat nascetur pellentesque nunc, orci odio. Consequat blandit turpis rhoncus dictumst nascetur congue sollicitudin class class. Suspendisse integer euismod primis vel sapien parturient. Nisl urna phasellus vestibulum fusce sit dapibus sapien donec diam. Nostra ut sem adipiscing efficitur nibh cras porttitor. Amet urna fusce nascetur eleifend finibus faucibus.
Dictum tortor euismod laoreet posuere turpis montes. Fringilla dignissim pretium congue elit libero. Faucibus venenatis nulla varius tristique parturient tempus etiam mattis quis. Consectetur platea proin ornare magna varius hendrerit. Venenatis scelerisque phasellus taciti ornare fusce class porta ante eleifend. Vivamus per elit proin bibendum aenean ac justo. Curae vulputate dis nisl laoreet sollicitudin semper. Gravida ante congue libero auctor nec posuere nascetur taciti. Litora velit posuere dictum sollicitudin curabitur ullamcorper dis. Ante natoque scelerisque nec quam nisi enim.
Mus ridiculus duis magna pharetra fermentum mattis. Orci lectus odio volutpat fames aenean dis. Luctus dui diam lacus sagittis consectetur nec varius eros. Nascetur netus enim ornare augue vestibulum tempus dis enim pulvinar. Laoreet mattis est, adipiscing montes ad vulputate ligula ad. Porttitor curae sit ultricies class vestibulum convallis netus. Ornare risus ad magna mollis risus. Lobortis fusce eget feugiat vivamus lectus.
Sagittis consequat mauris tellus faucibus at mi. Vestibulum nisi aenean ipsum metus felis. Primis consequat molestie diam per laoreet; eleifend posuere vivamus. Suspendisse erat justo egestas etiam bibendum aliquet integer turpis. Nostra fames vivamus lorem feugiat ligula aliquet. In laoreet auctor gravida convallis ultrices per a vehicula.
Malesuada himenaeos magnis vitae, efficitur auctor metus. Enim dis ad pretium sit ad inceptos conubia consequat. Sagittis pulvinar vestibulum dis finibus vel. Vel dapibus cubilia ornare arcu id etiam. Libero tempor dignissim a aenean lacus diam iaculis. Eros condimentum quis nulla vehicula primis. Vehicula leo aliquam tempus class; curae conubia lacinia habitasse curae. Nam accumsan torquent; adipiscing lacinia dictum suspendisse.
Ut tellus purus curabitur suscipit dignissim pharetra viverra. Porttitor feugiat nisl sit sagittis, bibendum integer metus. Aliquam volutpat at litora dis augue lacinia amet nascetur. Sociosqu consequat aptent ultrices varius odio nostra. Sit sit ut sit et consequat praesent varius id. Dolor volutpat odio iaculis ultrices dapibus porttitor sollicitudin.
Parturient arcu pretium phasellus gravida adipiscing interdum molestie. Turpis tempor duis; arcu commodo dolor fermentum. Faucibus molestie mi tristique tincidunt habitant fames. Ridiculus urna ex; phasellus conubia est ac ultrices. Non volutpat consequat fames proin varius tellus laoreet. Sagittis platea rutrum viverra id quam euismod orci curabitur erat. Curabitur aliquam eu luctus vel aenean sed. Eleifend egestas nostra rutrum torquent; lobortis adipiscing fusce. Imperdiet est turpis maximus parturient nisi ullamcorper penatibus vulputate. Vivamus sit aenean auctor tristique dis.
`;

function generateTextUntilN(charLimit: number): string {
  const limit = (charLimit <= 0) ? 4705 : (charLimit >= 10000000) ? 10000000 : charLimit;
  const repeated = repeatedText.repeat(Math.ceil(limit / repeatedText.length));
  return repeated.slice(0, limit);
}


export default async (request: Request, context: Context) => {
  console.log(`There was a request from ${context.geo.city} to ${request.url}`)
  // get query parameters
  const params = new URL(request.url).searchParams
  const length: number = Number.parseInt(params.get('length')?.toString()  || '4705')

  return new Response(generateTextUntilN(length)  , {
    headers: { 'content-type': 'text/plain' },
  })
}
