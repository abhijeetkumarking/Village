import React, { useState } from 'react';
import type { ContributionType } from '../types';
import { SectionHeading } from './SectionHeading';

interface FormState {
  contributorName: string;
  contact: string;
  title: string;
  details: string;
  categoryOrContext: string;
}

interface FormErrors {
  contributorName?: string;
  contact?: string;
  title?: string;
  details?: string;
}

export const ContributionForm: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ContributionType>('story');
  const [formData, setFormData] = useState<FormState>({
    contributorName: '',
    contact: '',
    title: '',
    details: '',
    categoryOrContext: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const tabLabels: Record<ContributionType, { title: string; hint: string }> = {
    story: {
      title: 'Share a Story',
      hint: 'Share oral folklore, elder recollections, or personal accounts of Aluara.',
    },
    photo: {
      title: 'Submit a Photograph',
      hint: 'Share details of family photographs, old landmarks, or village scenes.',
    },
    information: {
      title: 'Suggest Information',
      hint: 'Provide historical references, correct a record, or document traditions.',
    },
  };

  const handleTabChange = (tab: ContributionType) => {
    setActiveTab(tab);
    setErrors({});
    setIsSubmitted(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.contributorName.trim()) {
      newErrors.contributorName = 'Please enter your name.';
    } else if (formData.contributorName.trim().length < 2) {
      newErrors.contributorName = 'Name must be at least 2 characters long.';
    }

    if (!formData.contact.trim()) {
      newErrors.contact = 'Please provide an email or phone number for verification.';
    }

    if (!formData.title.trim()) {
      newErrors.title = 'Please provide a title or topic.';
    } else if (formData.title.trim().length < 3) {
      newErrors.title = 'Title must be at least 3 characters long.';
    }

    if (!formData.details.trim()) {
      newErrors.details = 'Please provide details or description.';
    } else if (formData.details.trim().length < 10) {
      newErrors.details = 'Please include at least 10 characters with your description.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({
      contributorName: '',
      contact: '',
      title: '',
      details: '',
      categoryOrContext: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="contribute" className="section" aria-labelledby="contribute-heading">
      <div className="container">
        <SectionHeading
          eyebrow="Community Stewardship"
          title="Help us preserve Aluara."
          subtitle="Every photograph, memory, story and piece of local knowledge can become part of Aluara's digital history."
          centered
        />

        <div className="contribute-box">
          {/* Explicit disclaimer stating submissions are not stored or transmitted */}
          <div className="form-disclaimer" role="note">
            <strong>Demonstration Archive Notice:</strong> This initial version of the Aluara archive operates
            solely on the front end. Submissions are processed locally in your browser for demonstration and
            validation; <em>no data is stored in a database or sent across a network</em>.
          </div>

          {/* Form Tabs */}
          <div className="contribute-tabs" role="tablist" aria-label="Contribution options">
            {(['story', 'photo', 'information'] as ContributionType[]).map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`contribute-tab-btn ${isActive ? 'is-active' : ''}`}
                  onClick={() => handleTabChange(tab)}
                >
                  {tabLabels[tab].title}
                </button>
              );
            })}
          </div>

          <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-muted)', marginBottom: '1.5rem', textAlign: 'center' }}>
            {tabLabels[activeTab].hint}
          </p>

          {/* Success Banner */}
          {isSubmitted ? (
            <div className="form-success-banner" role="status" aria-live="polite">
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--color-forest)' }}>
                ✓
              </div>
              <h4>Thank you for your submission preview!</h4>
              <p>
                Your entry &ldquo;<strong>{formData.title}</strong>&rdquo; has been formatted and validated.
                Remember: since this is an offline front-end version, this data is not transmitted or
                stored anywhere.
              </p>
              <div style={{ marginTop: '1.5rem' }}>
                <button type="button" onClick={handleReset} className="btn-primary">
                  Submit Another Contribution
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div aria-live="polite" className="sr-only">
                {Object.keys(errors).length > 0 ? `${Object.keys(errors).length} errors in form.` : ''}
              </div>

              {/* Contributor Name */}
              <div className="form-group">
                <label htmlFor="contributorName" className="form-label">
                  Your Full Name <span aria-hidden="true">*</span>
                </label>
                <input
                  type="text"
                  id="contributorName"
                  name="contributorName"
                  autoComplete="name"
                  className={`form-input ${errors.contributorName ? 'has-error' : ''}`}
                  placeholder="e.g. Rameshwar Kumar"
                  value={formData.contributorName}
                  onChange={handleChange}
                  aria-invalid={!!errors.contributorName}
                  aria-describedby={errors.contributorName ? 'contributorName-error' : undefined}
                  required
                />
                {errors.contributorName && (
                  <span id="contributorName-error" className="form-error" role="alert">
                    {errors.contributorName}
                  </span>
                )}
              </div>

              {/* Contact Information */}
              <div className="form-group">
                <label htmlFor="contact" className="form-label">
                  Contact Information (Phone or Email) <span aria-hidden="true">*</span>
                </label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  autoComplete="email"
                  className={`form-input ${errors.contact ? 'has-error' : ''}`}
                  placeholder="e.g. phone or email address"
                  value={formData.contact}
                  onChange={handleChange}
                  aria-invalid={!!errors.contact}
                  aria-describedby={errors.contact ? 'contact-error' : undefined}
                  required
                />
                {errors.contact && (
                  <span id="contact-error" className="form-error" role="alert">
                    {errors.contact}
                  </span>
                )}
              </div>

              {/* Title / Topic */}
              <div className="form-group">
                <label htmlFor="title" className="form-label">
                  {activeTab === 'story'
                    ? 'Story Title or Memory Subject'
                    : activeTab === 'photo'
                    ? 'Photograph Title or Subject'
                    : 'Topic / Historical Detail Title'}{' '}
                  <span aria-hidden="true">*</span>
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className={`form-input ${errors.title ? 'has-error' : ''}`}
                  placeholder={
                    activeTab === 'story'
                      ? 'e.g. Oral recollection of the banyan tree chowk'
                      : activeTab === 'photo'
                      ? 'e.g. Traditional clay home during festival'
                      : 'e.g. Correction regarding village pond name'
                  }
                  value={formData.title}
                  onChange={handleChange}
                  aria-invalid={!!errors.title}
                  aria-describedby={errors.title ? 'title-error' : undefined}
                  required
                />
                {errors.title && (
                  <span id="title-error" className="form-error" role="alert">
                    {errors.title}
                  </span>
                )}
              </div>

              {/* Category / Context Select */}
              <div className="form-group">
                <label htmlFor="categoryOrContext" className="form-label">
                  Category or Setting (Optional)
                </label>
                <select
                  id="categoryOrContext"
                  name="categoryOrContext"
                  className="form-select"
                  value={formData.categoryOrContext}
                  onChange={handleChange}
                >
                  <option value="">Select category...</option>
                  <option value="Elders Memory">Elders Memory</option>
                  <option value="Agriculture & Land">Agriculture &amp; Land</option>
                  <option value="Festivals & Culture">Festivals &amp; Culture</option>
                  <option value="Historical Landmark">Historical Landmark</option>
                  <option value="Other">Other Village Knowledge</option>
                </select>
              </div>

              {/* Details / Narrative */}
              <div className="form-group">
                <label htmlFor="details" className="form-label">
                  {activeTab === 'story'
                    ? 'Story Narrative & Notes'
                    : activeTab === 'photo'
                    ? 'Photograph Description & People/Places Featured'
                    : 'Information Details & Sources'}{' '}
                  <span aria-hidden="true">*</span>
                </label>
                <textarea
                  id="details"
                  name="details"
                  rows={5}
                  className={`form-textarea ${errors.details ? 'has-error' : ''}`}
                  placeholder="Share details, context, storyteller names, and significance..."
                  value={formData.details}
                  onChange={handleChange}
                  aria-invalid={!!errors.details}
                  aria-describedby={errors.details ? 'details-error' : undefined}
                  required
                />
                {errors.details && (
                  <span id="details-error" className="form-error" role="alert">
                    {errors.details}
                  </span>
                )}
              </div>

              {/* Submit CTA */}
              <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <button type="submit" className="btn-primary" style={{ minWidth: '220px' }}>
                  <span>Submit for Archival Review</span>
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
