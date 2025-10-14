import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Course() {
    const [courses, setCourses] = useState([{ id: "", name: "", students: "" }]);

    useEffect(() => {
        (async () => {
            const response = await fetch(`/api/course-detail/`);
            const allCoursesData = await response.json();
            setCourses(allCoursesData);
        })();
    }, []);

    return (
        <>
            <h3>Detalle de cursos</h3>
            {courses.map((course) => {
                return (
                    <>
                        <Link
                            to={``}
                            key={course.id}
                            className="btn-primary"
                        >
                           {course.name} 
                        </Link>
                        <br/>
                    </>
                );
            })}
        </>
    );
}
