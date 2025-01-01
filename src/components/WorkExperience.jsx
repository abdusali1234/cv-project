import { FaTrashAlt } from "react-icons/fa";
import { FaSuitcase } from "react-icons/fa";

function WorkExperience({
  info,
  index,
  handleCompanyNameChange,
  handleTitleChange,
  handleStartDateChange,
  handleEndDateChange,
  handleDescriptionChange,
  handleDelete,
}) {
  return (
    <>
      <div>
        <h1>
          <FaSuitcase /> Work Experience {index + 1}
          <FaTrashAlt onClick={() => handleDelete(index)} />
        </h1>
        <div>
          <form>
            <label>
              Company Name
              <input
                value={info.companyName}
                onChange={handleCompanyNameChange}
              />
            </label>
            <label>
              Position Title
              <input value={info.positionTitle} onChange={handleTitleChange} />
            </label>
            <label>
              Start Date
              <input value={info.startDate} onChange={handleStartDateChange} />
            </label>
            <label>
              End Date
              <input value={info.endDate} onChange={handleEndDateChange} />
            </label>
            <label>
              Description
              <textarea
                value={info.description}
                onChange={handleDescriptionChange}
              ></textarea>
            </label>
          </form>
        </div>
      </div>
    </>
  );
}
export default WorkExperience;
