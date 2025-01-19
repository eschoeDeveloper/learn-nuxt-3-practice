import type { CourseWithPath } from '~/types/course';

interface CourseReturn {
  course: Maybe<CourseWithPath>;
  prevCourse: Maybe<CourseWithPath>;
  nextCourse: Maybe<CourseWithPath>;
}

export const useCourse = (courseSlug: string): CourseReturn => {
  const { courses } = useCourses();
  const courseIndex = courses.findIndex((course) => course.courseSlug === courseSlug);
  const course = courses.find((course) => course.courseSlug === courseSlug);
  const prevCourse = courseIndex <= 0 ? null : courses[courseIndex - 1];
  const nextCourse = courseIndex >= courses.length - 1 ? null : courses[courseIndex + 1];
  return { course, prevCourse, nextCourse };
};
