import React from 'react'
import PropTypes from 'prop-types';

import { ExamFrame as ExamFrameComponent } from 'components'

/**
 * Primary UI component for user interaction
 */
export const ExamFrame = props => {
  const { left, right } = props

  return (
    <div style={{ height: '700px' }}>
      <ExamFrameComponent left={left} right={right} />
    </div>
  );
};

ExamFrame.propTypes = {
  /**
   * ExamFrame left content
   */
  left: PropTypes.node,
  /**
   * ExamFrame right content
   */
  right: PropTypes.node,
}

ExamFrame.defaultProps = {
  left: (
    <div>
      <h2>Differences between AAMC MCAT® Official Prep Practice Exams and the Actual MCAT
        Exam</h2>
      <p>
        Some of the differences include:
      </p>
      <h3>Horizontal Scroll</h3>
      <p>
        Horizontal scroll is a feature that does
        <span>not</span>
        often appear in the practice exams (e.g., Practice Exam 1) depending upon your screen size, but
        <span>may</span>
        appear in the actual exam in the case of a complex graphic, table, or equation.
      </p>
      <h3>Vertical Scroll</h3>
      <p>
        A vertical scroll bar appears in both the practice exams and the actual exam
        in complex or lengthy passages, graphics, tables, or equations. The appearance
        and functionality of the scroll bar may vary in the practice exams based on
        the browser used and may
        <span>not</span>
        resemble the scroll bar feature in the actual exam.
      </p>
      <h3>Screen Resolution</h3>
      <p>
        Practice exams will likely differ from what you will see on the actual MCAT
        exam as screen resolution and display size will vary depending on operating systems,
        browsers, and screen size. Screen resolution at testing centers is set at 1280 x 1024.
        There may be differences in monitor size across test centers.
      </p>
      <h3>Highlight Shortcut</h3>
      <p>
        The shortcut to remove highlight differs slightly in the practice exam from the actual
        exam. Review the “Use the Highlight Feature” instructions in the tutorial for more
        information on the difference between the two.
      </p>
      <h3>Pause vs Exam Breaks</h3>
      <p>
        Practice exams allow you to pause at any time. You
        <span>cannot</span>
        pause during the actual MCAT Exam. During the actual MCAT exam, you will have two
        optional 10-minute breaks and one optional 30-minute mid-exam break. Taking breaks
        longer than the allotted time may result in lost exam time and/or loss of the option
        to void your exam.
      </p>
      <h3>Void</h3>
      <p>
        To simulate the actual exam, practice exams will ask you to void or score your exam.
        Regardless of your selection, your practice scores will be saved and visible in your
        Score Report dashboard. On the actual MCAT exam, if you select VOID, your exam will
        <span>NOT</span>
        be scored.
      </p>
      <h3>Solutions</h3>
      <p>
        In practice exams, you can review the solutions to items after completion of the
        entire practice exam. In the actual MCAT exam, you will not be able to review any
        solutions.
      </p>
      <h3>Typeface</h3>
      <p>
        Some figures within MCAT Official Prep Practice Exams may appear with text in the Times New
        Roman typeface. In the actual MCAT Exam, figures appear with text in the Verdana typeface.
      </p>
    </div>
  ),
  right: (
    <div>
      <h2>Differences between AAMC MCAT® Official Prep Practice Exams and the Actual MCAT
        Exam</h2>
      <p>
        Some of the differences include:
      </p>
      <h3>Horizontal Scroll</h3>
      <p>
        Horizontal scroll is a feature that does
        <span>not</span>
        often appear in the practice exams (e.g., Practice Exam 1) depending upon your screen size, but
        <span>may</span>
        appear in the actual exam in the case of a complex graphic, table, or equation.
      </p>
      <h3>Vertical Scroll</h3>
      <p>
        A vertical scroll bar appears in both the practice exams and the actual exam
        in complex or lengthy passages, graphics, tables, or equations. The appearance
        and functionality of the scroll bar may vary in the practice exams based on
        the browser used and may
        <span>not</span>
        resemble the scroll bar feature in the actual exam.
      </p>
      <h3>Screen Resolution</h3>
      <p>
        Practice exams will likely differ from what you will see on the actual MCAT
        exam as screen resolution and display size will vary depending on operating systems,
        browsers, and screen size. Screen resolution at testing centers is set at 1280 x 1024.
        There may be differences in monitor size across test centers.
      </p>
      <h3>Highlight Shortcut</h3>
      <p>
        The shortcut to remove highlight differs slightly in the practice exam from the actual
        exam. Review the “Use the Highlight Feature” instructions in the tutorial for more
        information on the difference between the two.
      </p>
      <h3>Pause vs Exam Breaks</h3>
      <p>
        Practice exams allow you to pause at any time. You
        <span>cannot</span>
        pause during the actual MCAT Exam. During the actual MCAT exam, you will have two
        optional 10-minute breaks and one optional 30-minute mid-exam break. Taking breaks
        longer than the allotted time may result in lost exam time and/or loss of the option
        to void your exam.
      </p>
      <h3>Void</h3>
      <p>
        To simulate the actual exam, practice exams will ask you to void or score your exam.
        Regardless of your selection, your practice scores will be saved and visible in your
        Score Report dashboard. On the actual MCAT exam, if you select VOID, your exam will
        <span>NOT</span>
        be scored.
      </p>
      <h3>Solutions</h3>
      <p>
        In practice exams, you can review the solutions to items after completion of the
        entire practice exam. In the actual MCAT exam, you will not be able to review any
        solutions.
      </p>
      <h3>Typeface</h3>
      <p>
        Some figures within MCAT Official Prep Practice Exams may appear with text in the Times New
        Roman typeface. In the actual MCAT Exam, figures appear with text in the Verdana typeface.
      </p>
    </div>
  )
}
