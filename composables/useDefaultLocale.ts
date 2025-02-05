export const useDefaultLocale = (fallback: 'en' | 'ko' = 'en') => {
  const locale = ref<'en' | 'ko'>(fallback);

  // 서버 측에서 로케일 처리
  // if (process.server) {
  //   const reqHeaders = useRequestHeaders(['accept-language']);
  //   console.dir(reqHeaders);

  //   // 'accept-language'를 사용해서 로케일을 설정
  //   const lang =
  //     reqHeaders['accept-language']?.split(',')[0].split('-')[0] ?? fallback;
  //   if (['en', 'ko'].includes(lang)) {
  //     locale.value = lang as 'en' | 'ko';
  //   }
  // }

  // 클라이언트 측에서 로케일 처리
  if (process.client) {
    const lang = navigator.language?.split('-')[0] ?? fallback; // 기본값 설정
    if (['en', 'ko'].includes(lang)) {
      locale.value = lang as 'en' | 'ko';
    }
  }

  return locale;
};
