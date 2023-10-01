import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FaTrashAlt, FaPlus, FaSave } from 'react-icons/fa';

import { ContactContext } from '@/contexts/contact';
import { IconButton, Button } from '@/components/atoms';
import { InputGroup } from '@/components/molecules';

import type { ContactPayload } from '@/types/contact';

const ContactForm = () => {
  const [isShowPhones, setIsShowPhones] = useState<boolean[]>([true]);
  const {
    register,
    unregister,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { first_name: '', last_name: '', phones: [{ number: '' }] } });
  const contactCtx = useContext(ContactContext);
  const router = useRouter();

  const onSubmit: SubmitHandler<ContactPayload> = (data) => {
    contactCtx.create({ ...data, phones: data.phones.filter(Boolean) });
    router.push('/');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Add Contact</h2>
      <div
        css={css({
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          border: '1px solid #BFC9D9',
          padding: 18,
          borderRadius: 8,
          margin: '12px 0',
        })}>
        <div css={css({ display: 'flex', gap: 12 })}>
          <div css={css({ width: '100%' })}>
            <InputGroup
              label="First Name"
              placeholder="ex: John"
              aria-label="first name"
              aria-invalid={!!errors.first_name}
              isError={!!errors.first_name}
              {...register('first_name', {
                required: 'First name is required',
                maxLength: {
                  value: 32,
                  message: 'First name maximum length is 32',
                },
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: 'First name must be alphabet',
                },
              })}
            />
            {errors.first_name && (
              <small css={css({ color: '#F94D63' })}>{errors.first_name.message}</small>
            )}
          </div>
          <div css={css({ width: '100%' })}>
            <InputGroup
              label="Last Name"
              placeholder="ex: Doe"
              aria-label="last name"
              aria-invalid={!!errors.last_name}
              isError={!!errors.last_name}
              {...register('last_name', {
                required: 'Last name is required',
                maxLength: {
                  value: 32,
                  message: 'Last name maximum length is 32',
                },
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: 'Last name must be alphabet',
                },
              })}
            />
            {errors.last_name && (
              <small css={css({ color: '#F94D63' })}>{errors.last_name.message}</small>
            )}
          </div>
        </div>
        <div>
          <label css={css({ display: 'block', marginBottom: 4 })}>Phone Number</label>
          <div css={css({ display: 'flex', flexDirection: 'column', gap: 8 })}>
            {isShowPhones.map((show, idx) => {
              if (!show) return null;
              return (
                <div key={idx}>
                  <div css={css({ display: 'flex', alignItems: 'end' })}>
                    <InputGroup
                      placeholder="ex: 08123456789"
                      aria-label={`phone number ${idx + 1}`}
                      aria-invalid={!!errors.phones?.[idx]?.number}
                      isError={!!errors.phones?.[idx]?.number}
                      {...register(`phones.${idx}.number`, {
                        required: 'Phone number is required',
                        maxLength: {
                          value: 13,
                          message: 'Phone number maximum length is 13',
                        },
                        minLength: {
                          value: 10,
                          message: 'Phone number minimum length is 10',
                        },
                        pattern: {
                          value: /^[0-9]+$/i,
                          message: 'Phone number must be numeric',
                        },
                      })}
                    />
                    <IconButton
                      type="button"
                      variant="ghost"
                      color="secondary"
                      icon={<FaTrashAlt />}
                      aria-label="delete phone"
                      disabled={isShowPhones.filter((show) => show).length === 1}
                      onClick={() => {
                        const newIsShowPhones = [...isShowPhones];
                        newIsShowPhones.splice(idx, 1, false);
                        unregister(`phones.${idx}.number`);
                        setIsShowPhones(newIsShowPhones);
                      }}
                    />
                  </div>
                  {errors.phones?.[idx]?.number && (
                    <small css={css({ color: '#F94D63' })}>
                      {errors.phones?.[idx]?.number?.message}
                    </small>
                  )}
                </div>
              );
            })}
            <Button
              type="button"
              icon={<FaPlus />}
              variant="outlined"
              onClick={() => setIsShowPhones([...isShowPhones, true])}>
              Add Another Phone
            </Button>
          </div>
        </div>
      </div>
      <div css={css({ display: 'flex', justifyContent: 'end', gap: 8 })}>
        <Button type="submit" icon={<FaSave />}>
          Save
        </Button>
        <Button type="button" color="secondary" onClick={() => router.push('/')}>
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
