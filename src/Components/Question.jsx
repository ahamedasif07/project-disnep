

const Question = ({faq}) => {
    const {question,answer}=faq
    return (
        <div>
            <div className="space-y-4 my-4">
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">{question}</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">{answer} </p>
			</details>
            </div>
        </div>
    );
};

export default Question;