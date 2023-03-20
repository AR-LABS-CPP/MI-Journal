import { MdKeyboardArrowDown } from "react-icons/md"
import { Accordion } from "@mui/material"
import AccordionDetails from "@mui/material/AccordionDetails"
import AccordionSummary from "@mui/material/AccordionSummary"
import Typography from "@mui/material/Typography"

const Blogs = () => {
    const styles = {
        buttonStyle: "bg-primary hover:-translate-y-1 hover:shadow-lg transition-transform duration-300 w-28 text-white py-2 rounded shadow-md"
    }

    return (
        <div className="min-h-full">
            <p className="shadow-md mx-20 text-center my-10 border-[1px] border-gray-300 rounded-full py-3 text-3xl font-medium">
                Your Blogs
            </p>

            <div className="mb-7 mx-14 border-[1px]">
                <Accordion>
                    <AccordionSummary expandIcon={<MdKeyboardArrowDown size={30} />}>
                        <Typography >Your blog 1</Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </p>

                        <div className="mt-5 w-full flex justify-center gap-x-5">
                            <button className={styles.buttonStyle}>View</button>
                            <button className={styles.buttonStyle}>Edit</button>
                            <button className={styles.buttonStyle}>Delete</button>
                        </div>
                    </AccordionDetails>
                </Accordion>
            </div>

            <div className="mb-7 mx-14 border-[1px]">
                <Accordion>
                    <AccordionSummary expandIcon={<MdKeyboardArrowDown size={30} />}>
                        <Typography >Your blog 2</Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </p>

                        <div className="mt-5 w-full flex justify-center gap-x-5">
                            <button className={styles.buttonStyle}>View</button>
                            <button className={styles.buttonStyle}>Edit</button>
                            <button className={styles.buttonStyle}>Delete</button>
                        </div>
                    </AccordionDetails>
                </Accordion>
            </div>

            <div className="mb-7 mx-14 border-[1px]">
                <Accordion>
                    <AccordionSummary expandIcon={<MdKeyboardArrowDown size={30} />}>
                        <Typography >Your blog 3</Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </p>

                        <div className="mt-5 w-full flex justify-center gap-x-5">
                            <button className={styles.buttonStyle}>View</button>
                            <button className={styles.buttonStyle}>Edit</button>
                            <button className={styles.buttonStyle}>Delete</button>
                        </div>
                    </AccordionDetails>
                </Accordion>
            </div>

            <div className="mb-7 mx-14 border-[1px]">
                <Accordion>
                    <AccordionSummary expandIcon={<MdKeyboardArrowDown size={30} />}>
                        <Typography >Your blog 4</Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </p>

                        <div className="mt-5 w-full flex justify-center gap-x-5">
                            <button className={styles.buttonStyle}>View</button>
                            <button className={styles.buttonStyle}>Edit</button>
                            <button className={styles.buttonStyle}>Delete</button>
                        </div>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    )
}

export default Blogs