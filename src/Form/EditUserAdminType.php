<?php

namespace App\Form;

use App\Entity\Pages;
use App\Entity\Users;
use App\Form\PagesType;
use App\Repository\PagesRepository;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\BirthdayType;

class EditUserAdminType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('email')
            ->add('roles', ChoiceType::class, [
                'choices' => [
                    'Utilisateur' => 'ROLE_USER',
                    'Collectionneur' => 'ROLE_KOLLECTOR',
                    'Administrateur' => 'ROLE_ADMIN'
                ],
                'expanded' => true,
                'multiple' => true,
                'label' => 'Rôles' 
            ])
            ->add('password')
            ->add('isVerified')
            ->add('name')
            ->add('firstname')
            ->add('age', BirthdayType::class)
            ->add('job')
            ->add('postalcode')
            ->add('city')
            ->add('pseudo')
            // ->add('playmo_icon')
            // ->add('page', EntityType::class, [
            //     'class' => PagesType::class,
            //     'required' => false,
            //     'query_builder' => function (PagesRepository $id) {
            //         return $id->createQueryBuilder('id');
            //     }
            // ])


            ->add('Enregistrer', SubmitType::class, [
                'attr' => ['class' =>"btn_play"]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Users::class,
        ]);
    }
}
