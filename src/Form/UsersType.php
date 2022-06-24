<?php

namespace App\Form;

use App\Entity\Pages;
use App\Entity\Users;
use App\Repository\PagesRepository;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class UsersType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('email')
            ->add('roles')
            ->add('password')
            ->add('isVerified')
            ->add('page')
            ->add('name')
            ->add('firstname')
            ->add('age')
            ->add('job')
            ->add('postalcode')
            ->add('city')
            ->add('pseudo')
            ->add('playmo_icon')
            ->add('pictures')
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Users::class,
        ]);
    }
}
