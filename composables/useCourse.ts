// import type { CourseWithPath } from '~/types/course';
import type { CourseReturn } from '~/types/course';

// interface CourseReturn {
//   course: Maybe<CourseWithPath>;
//   prevCourse: Maybe<CourseWithPath>;
//   nextCourse: Maybe<CourseWithPath>;
// }

export const useCourse = async (courseSlug: string): Promise<CourseReturn> => {
  const { data, error } = await useFetch(`/api/course/${courseSlug}`);

  if (error.value) {
    throw createError({
      ...error.value,
    });
  }

  return data.value as CourseReturn;
};
